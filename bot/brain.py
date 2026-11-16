"""Claude: клиентке жауап жазады және «іс» болса сізге беру керегін шешеді."""

import json
import logging
from dataclasses import dataclass

import anthropic

from config import CLAUDE_EFFORT, CLAUDE_MODEL, KNOWLEDGE_PATH

log = logging.getLogger("brain")
client = anthropic.AsyncAnthropic()

# Сервердегі fallback-ты қолдайтын модельдер
FALLBACK_MODELS = {"claude-opus-5-5", "claude-opus-5", "claude-sonnet-5-5", "claude-fable-5-2", "claude-fable-5-1"}

SYSTEM = """You are the assistant of newwave, a web studio in Kazakhstan that builds websites for businesses.
You answer customers who write via {channel}.

How to answer:
- Reply in the customer's language (Kazakh, Russian or English) — match what they wrote.
- You may answer ANY question, including general ones unrelated to websites: be genuinely helpful, friendly and concise.
- For questions about newwave, use only the business information below. If something isn't covered there, say the owner will clarify — never invent prices, discounts, deadlines or guarantees.
- Keep it short and natural, like a messenger reply (email replies may be a bit fuller, with a greeting and sign-off "newwave").
- Plain text only, no Markdown.

When to hand off to the owner (handoff = true) — this is "real business":
- the customer wants to order / start a project, or describes their concrete project and asks for an estimate;
- negotiating price, discounts, deadlines, contract, invoice, payment or refund;
- a complaint, a problem with an existing site, or anything urgent;
- the customer asks to talk to a person / the owner;
- any question where an answer would commit the studio to something.
Small talk, general questions and questions answered by the information below are NOT a handoff.
When handing off, the reply should still be useful: thank them, answer what you safely can, collect what is missing (business type, wanted package, deadline, phone) only if it's natural, and say the owner will reply personally soon.

Set ignore = true (and reply = "") only for messages that need no reply at all: newsletters, notifications, ads, spam, automatic mails.

summary: one or two sentences in Kazakh for the owner — who the customer is and what they want.

Business information:
<knowledge>
{knowledge}
</knowledge>"""

SCHEMA = {
    "type": "object",
    "properties": {
        "reply": {"type": "string", "description": "Message to send to the customer"},
        "handoff": {"type": "boolean", "description": "True if the owner must answer personally"},
        "category": {
            "type": "string",
            "enum": ["question", "small_talk", "lead", "order", "payment", "complaint", "human_request", "spam", "other"],
        },
        "ignore": {"type": "boolean", "description": "True if no reply should be sent"},
        "summary": {"type": "string", "description": "Short summary for the owner, in Kazakh"},
    },
    "required": ["reply", "handoff", "category", "ignore", "summary"],
    "additionalProperties": False,
}

CATEGORY_KK = {
    "question": "сұрақ",
    "small_talk": "әңгіме",
    "lead": "жаңа клиент",
    "order": "тапсырыс",
    "payment": "төлем",
    "complaint": "шағым",
    "human_request": "адаммен сөйлескісі келеді",
    "spam": "спам",
    "other": "басқа",
}


@dataclass
class Decision:
    reply: str
    handoff: bool
    category: str
    ignore: bool
    summary: str

    @property
    def category_kk(self) -> str:
        return CATEGORY_KK.get(self.category, self.category)


FAILSAFE = Decision(
    reply="",
    handoff=True,
    category="other",
    ignore=False,
    summary="Бот жауап бере алмады (Claude қатесі) — өзіңіз қараңыз.",
)


def _normalize(history: list[dict[str, str]]) -> list[dict[str, str]]:
    """Claude үшін: user-дан басталып, рөлдер кезектесуі керек — қатар келгендерін біріктіреміз."""
    out: list[dict[str, str]] = []
    for m in history:
        if not m["content"].strip():
            continue
        if out and out[-1]["role"] == m["role"]:
            out[-1] = {"role": m["role"], "content": out[-1]["content"] + "\n\n" + m["content"]}
        else:
            out.append(dict(m))
    while out and out[0]["role"] != "user":
        out.pop(0)
    return out


async def decide(history: list[dict[str, str]], channel: str) -> Decision:
    """history — соңғы хабар клиенттікі (role=user) болуы керек."""
    messages = _normalize(history)
    if not messages or messages[-1]["role"] != "user":
        return FAILSAFE
    knowledge = KNOWLEDGE_PATH.read_text(encoding="utf-8") if KNOWLEDGE_PATH.exists() else ""
    try:
        params = dict(
            model=CLAUDE_MODEL,
            max_tokens=16000,
            system=SYSTEM.format(channel=channel, knowledge=knowledge),
            messages=messages,
            output_config={"effort": CLAUDE_EFFORT, "format": {"type": "json_schema", "schema": SCHEMA}},
        )
        if CLAUDE_MODEL in FALLBACK_MODELS:
            # Claude бас тартса, сервер өзі басқа модельмен қайталайды (Haiku-да бұл мүмкіндік жоқ)
            resp = await client.beta.messages.create(
                **params, betas=["server-side-fallback-2026-07-01"], fallbacks="default"
            )
        else:
            resp = await client.messages.create(**params)
    except anthropic.AuthenticationError:
        log.error("ANTHROPIC_API_KEY қате немесе жоқ")
        return FAILSAFE
    except anthropic.RateLimitError:
        log.warning("Claude: лимит (429)")
        return FAILSAFE
    except anthropic.APIStatusError as e:
        log.error("Claude API қатесі %s: %s", e.status_code, e.message)
        return FAILSAFE
    except anthropic.APIConnectionError:
        log.error("Claude-ға қосылу мүмкін болмады")
        return FAILSAFE

    if resp.stop_reason in ("refusal", "max_tokens"):
        log.warning("Claude stop_reason=%s", resp.stop_reason)
        return FAILSAFE
    text = "".join(b.text for b in resp.content if b.type == "text")
    try:
        data = json.loads(text)
        return Decision(
            reply=str(data["reply"]).strip(),
            handoff=bool(data["handoff"]),
            category=str(data["category"]),
            ignore=bool(data["ignore"]),
            summary=str(data["summary"]).strip(),
        )
    except (json.JSONDecodeError, KeyError, TypeError):
        log.error("Claude жауабын оқу мүмкін болмады: %r", text[:300])
        return FAILSAFE
