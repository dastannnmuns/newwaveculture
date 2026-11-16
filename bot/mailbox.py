"""Gmail / Mail.ru: IMAP арқылы жаңа хаттарды оқу, SMTP арқылы жауап жіберу."""

import email
import email.policy
import html
import imaplib
import logging
import re
import smtplib
import ssl
from dataclasses import dataclass
from email.message import EmailMessage
from email.utils import formataddr, make_msgid, parseaddr
from pathlib import Path

from config import MailAccount

log = logging.getLogger("mail")
MAX_BODY = 20000

SKIP_SENDERS = re.compile(r"(no-?reply|do-?not-?reply|mailer-daemon|postmaster|notifications?@|bounce)", re.I)


@dataclass
class Incoming:
    uid: int
    sender: str  # тек мекенжай
    sender_name: str
    subject: str
    body: str
    message_id: str
    references: str


def _body(msg: email.message.EmailMessage) -> str:
    part = msg.get_body(preferencelist=("plain", "html"))
    if part is None:
        return ""
    text = part.get_content()
    if part.get_content_type() == "text/html":
        text = re.sub(r"(?is)<(script|style).*?</\1>", " ", text)
        text = re.sub(r"(?i)<br\s*/?>|</p>|</div>", "\n", text)
        text = html.unescape(re.sub(r"<[^>]+>", " ", text))
    # Цитаталанған ескі хатты алып тастаймыз
    lines = []
    for line in text.splitlines():
        if re.match(r"^\s*>", line):
            continue
        if re.match(r"^\s*(On .+ wrote:|.+ написал\(а\):|-----Original Message-----)", line):
            break
        lines.append(line.rstrip())
    text = re.sub(r"\n{3,}", "\n\n", "\n".join(lines)).strip()
    if len(text) > MAX_BODY:
        text = text[:MAX_BODY] + "\n\n[хат тым ұзын, қалғаны қысқартылды]"
    return text


def _is_automatic(msg: email.message.EmailMessage, sender: str) -> bool:
    if SKIP_SENDERS.search(sender):
        return True
    if msg.get("Auto-Submitted", "no").lower() != "no":
        return True
    if msg.get("List-Id") or msg.get("List-Unsubscribe"):
        return True
    if msg.get("Precedence", "").lower() in ("bulk", "list", "junk"):
        return True
    return False


def fetch_new(acc: MailAccount, last_uid: int | None) -> tuple[list[Incoming], int]:
    """last_uid-тен кейінгі хаттар. Бірінші іске қосуда (last_uid=None) ескі хаттарға жауап бермейміз.
    Хаттың «оқылмаған» белгісі өзгермейді (BODY.PEEK)."""
    out: list[Incoming] = []
    with imaplib.IMAP4_SSL(acc.imap_host, acc.imap_port, ssl_context=ssl.create_default_context()) as im:
        im.login(acc.address, acc.password)
        im.select("INBOX", readonly=True)
        typ, data = im.uid("SEARCH", None, "ALL")
        uids = [int(x) for x in (data[0] or b"").split()]
        if not uids:
            return out, last_uid or 0
        top = max(uids)
        if last_uid is None:
            return out, top
        for uid in [u for u in uids if u > last_uid]:
            typ, parts = im.uid("FETCH", str(uid), "(BODY.PEEK[])")
            raw = next((p[1] for p in parts if isinstance(p, tuple)), None)
            if not raw:
                continue
            msg = email.message_from_bytes(raw, policy=email.policy.default)
            name, addr = parseaddr(str(msg.get("Reply-To") or msg.get("From", "")))
            addr = addr.lower()
            if not addr or addr == acc.address.lower() or _is_automatic(msg, addr):
                continue
            out.append(
                Incoming(
                    uid=uid,
                    sender=addr,
                    sender_name=name,
                    subject=str(msg.get("Subject", "")).strip(),
                    body=_body(msg),
                    message_id=str(msg.get("Message-ID", "")).strip(),
                    references=str(msg.get("References", "")).strip(),
                )
            )
        return out, top


def send_reply(
    acc: MailAccount,
    to: str,
    subject: str,
    body: str,
    in_reply_to: str = "",
    references: str = "",
    attachments: list[Path] | None = None,
) -> None:
    m = EmailMessage()
    m["From"] = formataddr(("newwave", acc.address))
    m["To"] = to
    m["Subject"] = subject if subject.lower().startswith(("re:", "ответ:")) else f"Re: {subject or 'newwave'}"
    m["Message-ID"] = make_msgid(domain=acc.address.split("@")[-1])
    if in_reply_to:
        m["In-Reply-To"] = in_reply_to
        m["References"] = (references + " " + in_reply_to).strip()
    m.set_content(body)
    for path in attachments or []:
        sub = "png" if path.suffix.lower() == ".png" else "jpeg"
        m.add_attachment(path.read_bytes(), maintype="image", subtype=sub, filename=path.name)
    with smtplib.SMTP_SSL(acc.smtp_host, acc.smtp_port, context=ssl.create_default_context()) as s:
        s.login(acc.address, acc.password)
        s.send_message(m)
    log.info("%s → %s жауап жіберілді", acc.name, to)
