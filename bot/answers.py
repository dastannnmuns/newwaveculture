"""ЖИ-сыз жауаптар: answers.json ішіндегі кілт сөздер бойынша дайын жауап табу."""

import json
import re
from dataclasses import dataclass

from config import ROOT

PATH = ROOT / "answers.json"
KK_LETTERS = set("әғқңөұүһі")


def load() -> dict:
    # Әр жолы файлдан оқимыз — өзгертсеңіз, бот қайта қоспай-ақ жаңа жауаптарды қолданады
    return json.loads(PATH.read_text(encoding="utf-8"))


def lang_of(text: str, fallback: str = "kk") -> str:
    t = text.lower()
    if any(ch in KK_LETTERS for ch in t):
        return "kk"
    if re.search(r"[а-яё]", t):
        return "ru"
    return fallback


def _has(text: str, kw: str) -> bool:
    # сөздің басынан іздейміз: «баға» → «бағасы», бірақ «hi» → «this»-ке сәйкес келмейді
    return re.search(r"(?<!\w)" + re.escape(kw.lower()), text) is not None


@dataclass
class Match:
    topics: list[dict]  # табылған тақырыптар (ең сәйкесі бірінші, ең көбі 2)
    handoff: bool  # «іс»: иесіне беру керек
    greeting: bool

    @property
    def topic(self) -> dict | None:
        return self.topics[0] if self.topics else None


def match(text: str) -> Match:
    data = load()
    t = " ".join(text.lower().split())
    scored = []
    for i, tp in enumerate(data["topics"]):
        score = sum(_has(t, k) for k in tp.get("keywords", []))
        if score:
            scored.append((-score, i, tp))
    best = [tp for _, _, tp in sorted(scored)[:2]]
    handoff = any(_has(t, k) for k in data.get("handoff_keywords", []))
    greeting = any(_has(t, k) for k in data.get("greeting", {}).get("keywords", []))
    return Match(best, handoff, greeting)


def by_button(text: str) -> dict | None:
    t = text.strip()
    return next((tp for tp in load()["topics"] if tp.get("button") == t), None)


def buttons() -> list[str]:
    data = load()
    return [tp["button"] for tp in data["topics"] if tp.get("button")] + [data["owner_button"]]


def text(key: str, lang: str) -> str:
    """greeting / handoff / unknown / email_autoreply мәтіні."""
    block = load()[key]
    return block.get(lang) or block["kk"]


def answer(topic: dict, lang: str) -> str:
    return topic.get(lang) or topic["kk"]
