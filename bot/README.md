# newwave бот — Telegram + Gmail + Mail.ru

Клиент Telegram-ға, Gmail-ге немесе Mail.ru-ға жазады → **бот (Claude) өзі жауап береді**.
Кез келген сұраққа жауап бере алады: сайт, баға, кезеңдер, тіпті жалпы сұрақтар.

**«Іс» болса** (тапсырыс, нақты жоба, баға/жеңілдік келісу, төлем, шағым, «адаммен сөйлескім келеді»):
1. Бот клиентке сыпайы жауап береді: «Рахмет, иесі өзі жауап береді».
2. Сізге Telegram-ға **🔥 хабар** келеді: кім, не қалайды, клиенттің хаты.
3. Сіз сол хабарға **reply** жасап жазасыз, жауап клиентке кетеді (Telegram болса Telegram-ға, хат болса email-ге).
4. Сол клиентке енді бот жауап бермейді, тек сіз жауап бересіз. **«🤖 Ботқа қайтару»** батырмасын бассаңыз, бот қайта жауап бере бастайды.

```
Клиент ──► Telegram / Gmail / Mail.ru ──► бот (Claude)
                                           ├─ қарапайым сұрақ → өзі жауап береді
                                           └─ «іс» → 🔥 сізге Telegram-ға → сіз reply → клиентке
```

## 1. Не керек

| Не | Қайдан алуға болады |
|---|---|
| **Claude API кілті** | https://platform.claude.com → API Keys (ақылы, бір жауап шамамен бірнеше теңге тұрады) |
| **Telegram бот токені** | Telegram-да @BotFather → `/newbot` |
| **Gmail App Password** | Google аккаунт → Қауіпсіздік → 2 қадамды растауды қосу → «App passwords» (16 әріп) |
| **Mail.ru App Password** | Mail.ru → Настройки → Безопасность → «Пароли для внешних приложений» |

> Gmail мен Mail.ru міндетті емес: қайсысын толтырсаңыз, сол қосылады.
> Gmail-де IMAP қосулы болуы керек (Settings → Forwarding and POP/IMAP → Enable IMAP).

## 2. Орнату

Компьютерде немесе серверде Python 3.10+ болуы керек.

```bash
cd bot
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env             # Windows: copy .env.example .env
```

`.env` файлын ашып, кілттерді жазыңыз.

## 3. Өз Telegram ID-іңізді қосу

1. `python bot.py` арқылы іске қосыңыз.
2. Telegram-да өз ботыңызға `/id` деп жазыңыз, ол сандарды көрсетеді.
3. Сол санды `.env` ішіндегі `OWNER_CHAT_ID=` жолына жазып, ботты қайта қосыңыз (Ctrl+C, кейін `python bot.py`).

Енді бот сізді иесі деп таниды: «🟢 newwave бот іске қосылды» деп жазады.

## 4. Командалар (тек сізге)

- `/help`: көмек және қосылған пошталар
- `/list`: сіз өзіңіз жауап беріп жатқан клиенттер (әрқайсысының «Ботқа қайтару» батырмасы бар)
- `/id`: chat ID-ді көрсетеді

## 5. Ботқа ақпарат үйрету

Баға, пакет және жұмыс тәртібі **`knowledge.md`** файлында тұр. Оны өзгертсеңіз, бот келесі хабардан бастап жаңа мәліметпен жауап береді, қайта қосудың қажеті жоқ.
Бот бұл файлда жоқ бағаны, жеңілдікті немесе мерзімді өзі ойлап таппайды, ондайда «иесі нақтылайды» дейді.

## 6. Пошта қалай жұмыс істейді

- Әр 60 секунд сайын (`MAIL_POLL_SECONDS`) INBOX тексеріледі.
- **Бірінші іске қосқанда ескі хаттарға жауап бермейді**, тек осыдан кейін келген жаңа хаттарға жауап береді.
- Жарнама, рассылка, `noreply` мекенжайлары және автоматты хаттар өткізіліп жіберіледі.
- Хаттың «оқылмаған» белгісі өзгермейді, сіз поштаңызда бәрін бұрынғыдай көресіз.
- Жауап тақырыбы `Re: ...` болып, сол хаттың тізбегіне (thread) кетеді.

## 7. Тәулік бойы жұмыс істету

Бот компьютер қосулы тұрғанда ғана жұмыс істейді. 24/7 жұмыс үшін арзан VPS серверге (мысалы, ps.kz, Hetzner, DigitalOcean) қойыңыз:

```bash
# systemd сервисі: /etc/systemd/system/newwave-bot.service
[Unit]
Description=newwave bot
After=network-online.target

[Service]
WorkingDirectory=/home/USER/newwaveculture/bot
ExecStart=/home/USER/newwaveculture/bot/.venv/bin/python bot.py
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable --now newwave-bot
journalctl -u newwave-bot -f      # логтар
```

## Баптаулар (`.env`)

| Айнымалы | Мағынасы |
|---|---|
| `ANTHROPIC_API_KEY` | Claude кілті |
| `BOT_MODEL` | Модель, әдепкі `claude-opus-5-5` |
| `BOT_EFFORT` | Ойлау деңгейі: `low` (жылдам, арзан) / `medium` / `high` |
| `TELEGRAM_BOT_TOKEN` | @BotFather берген токен |
| `OWNER_CHAT_ID` | Сіздің Telegram ID-іңіз |
| `GMAIL_ADDRESS`, `GMAIL_APP_PASSWORD` | Gmail |
| `MAILRU_ADDRESS`, `MAILRU_APP_PASSWORD` | Mail.ru |
| `MAIL_POLL_SECONDS` | Поштаны тексеру аралығы (секунд) |

⚠️ `.env` файлын ешкімге жібермеңіз және GitHub-қа салмаңыз (`.gitignore`-да тұр).
