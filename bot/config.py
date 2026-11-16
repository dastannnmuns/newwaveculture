"""Баптаулар: .env файлынан немесе орта айнымалыларынан оқылады."""

import os
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def _load_env(path: Path) -> None:
    """Қарапайым .env оқушы (python-dotenv керек емес)."""
    if not path.exists():
        return
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


_load_env(ROOT / ".env")


def env(name: str, default: str = "") -> str:
    return os.environ.get(name, default).strip()


@dataclass(frozen=True)
class MailAccount:
    name: str  # "Gmail" / "Mail.ru"
    address: str
    password: str
    imap_host: str
    smtp_host: str
    imap_port: int = 993
    smtp_port: int = 465


CLAUDE_MODEL = env("BOT_MODEL", "claude-opus-5-5")
CLAUDE_EFFORT = env("BOT_EFFORT", "low")
TELEGRAM_BOT_TOKEN = env("TELEGRAM_BOT_TOKEN")
OWNER_CHAT_ID = int(env("OWNER_CHAT_ID") or 0)
MAIL_POLL_SECONDS = int(env("MAIL_POLL_SECONDS", "60") or 60)
DB_PATH = ROOT / "state.db"
KNOWLEDGE_PATH = ROOT / "knowledge.md"

MAIL_ACCOUNTS: list[MailAccount] = []
if env("GMAIL_ADDRESS") and env("GMAIL_APP_PASSWORD"):
    MAIL_ACCOUNTS.append(
        MailAccount(
            "Gmail",
            env("GMAIL_ADDRESS"),
            env("GMAIL_APP_PASSWORD").replace(" ", ""),
            "imap.gmail.com",
            "smtp.gmail.com",
        )
    )
if env("MAILRU_ADDRESS") and env("MAILRU_APP_PASSWORD"):
    MAIL_ACCOUNTS.append(
        MailAccount(
            "Mail.ru",
            env("MAILRU_ADDRESS"),
            env("MAILRU_APP_PASSWORD").replace(" ", ""),
            "imap.mail.ru",
            "smtp.mail.ru",
        )
    )
