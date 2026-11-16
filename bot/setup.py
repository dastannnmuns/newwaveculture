"""Бірінші баптау: токенді сұрайды, тексереді, .env файлын өзі жазады.

Іске қосу: start.bat (Windows) / start.sh (Mac, Linux) — немесе python setup.py
"""

import json
import secrets
import ssl
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ENV = ROOT / ".env"


def ask(prompt: str, default: str = "") -> str:
    try:
        v = input(prompt).strip()
    except EOFError:
        v = ""
    return v or default


def check_token(token: str) -> str | None:
    """Токен дұрыс болса, бот атын қайтарады."""
    try:
        with urllib.request.urlopen(
            f"https://api.telegram.org/bot{token}/getMe", timeout=15, context=ssl.create_default_context()
        ) as r:
            data = json.load(r)
        return data["result"]["username"] if data.get("ok") else None
    except (urllib.error.URLError, KeyError, ValueError):
        return None


def mail(name: str, hint: str) -> tuple[str, str]:
    print(f"\n── {name} (керек болмаса, Enter басыңыз) ──")
    addr = ask(f"{name} мекенжайы: ")
    if not addr:
        return "", ""
    print(hint)
    pwd = ask("Қолданба паролі (App Password): ").replace(" ", "")
    return addr, pwd


def main() -> None:
    print("=" * 56)
    print("  newwave бот: баптау")
    print("=" * 56)
    print("\n1) Telegram-да @BotFather ашып, /newbot жазыңыз,")
    print("   ботқа ат беріңіз. Ол берген токенді осында қойыңыз")
    print("   (мысалы 1234567890:AAH...).\n")
    while True:
        token = ask("Бот токені: ")
        if not token:
            print("Токен керек.")
            continue
        print("Тексеріп жатырмын...")
        username = check_token(token)
        if username:
            print(f"✅ Дұрыс! Бот: @{username}")
            break
        print("❌ Токен қате немесе интернет жоқ. Қайта көріңіз.\n")

    g_addr, g_pwd = mail(
        "Gmail",
        "   Google аккаунт → Қауіпсіздік → 2 қадамды растау → App passwords (16 әріп).",
    )
    m_addr, m_pwd = mail(
        "Mail.ru",
        "   Mail.ru → Настройки → Безопасность → Пароли для внешних приложений.",
    )

    code = str(secrets.randbelow(900000) + 100000)
    ENV.write_text(
        "\n".join(
            [
                f"TELEGRAM_BOT_TOKEN={token}",
                "OWNER_CHAT_ID=",
                f"CLAIM_CODE={code}",
                f"GMAIL_ADDRESS={g_addr}",
                f"GMAIL_APP_PASSWORD={g_pwd}",
                f"MAILRU_ADDRESS={m_addr}",
                f"MAILRU_APP_PASSWORD={m_pwd}",
                "MAIL_POLL_SECONDS=60",
                "",
            ]
        ),
        encoding="utf-8",
    )
    print("\n✅ Баптау сақталды (.env).")
    print(f"\nБот іске қосылғанда, Telegram-да @{username} ботына мына кодты жазыңыз:  {code}")
    print("Сонда бот сізді иесі деп таниды.\n")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(1)
