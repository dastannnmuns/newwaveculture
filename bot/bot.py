"""newwave бот: Telegram + Gmail + Mail.ru. ЖИ ЖОҚ, тек дайын жауаптар (answers.json).

Telegram: клиентке мәзір батырмалары + кілт сөздер бойынша дайын жауаптар + дизайн суреттері.
«Іс» болса (тапсырыс, жеңілдік, адам сұраса) немесе бот сұрақты түсінбесе → сізге Telegram-ға хабар,
сіз сол хабарға reply жасап жауап бересіз → клиентке кетеді (Telegram-ға немесе email-ге).
Пошта: жаңа хатқа автожауап («хатыңыз қабылданды» + сұрағына сай дайын жауап) → хат сізге Telegram-ға.

Іске қосу:  python bot.py
"""

import asyncio
import logging
import time
from collections import defaultdict

from telegram import (
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    InputMediaPhoto,
    Message,
    ReplyKeyboardMarkup,
    Update,
)
from telegram.ext import (
    Application,
    CallbackQueryHandler,
    CommandHandler,
    ContextTypes,
    MessageHandler,
    filters,
)

import answers
import designs
import store
from config import MAIL_ACCOUNTS, MAIL_POLL_SECONDS, OWNER_CHAT_ID, TELEGRAM_BOT_TOKEN
from mailbox import fetch_new, send_reply

logging.basicConfig(format="%(asctime)s %(levelname)s %(name)s: %(message)s", level=logging.INFO)
logging.getLogger("httpx").setLevel(logging.WARNING)
log = logging.getLogger("bot")

AUTOREPLY_EVERY = 24 * 3600  # бір адамға email автожауап тәулігіне бір рет
locks: defaultdict[str, asyncio.Lock] = defaultdict(asyncio.Lock)
ACCOUNTS = {a.name: a for a in MAIL_ACCOUNTS}


def is_owner(update: Update) -> bool:
    return bool(OWNER_CHAT_ID) and update.effective_chat is not None and update.effective_chat.id == OWNER_CHAT_ID


def chunks(text: str, n: int = 4000) -> list[str]:
    return [text[i : i + n] for i in range(0, len(text), n)] or [""]


def kb(mode: str) -> InlineKeyboardMarkup:
    if mode == "human":
        return InlineKeyboardMarkup([[InlineKeyboardButton("🤖 Ботқа қайтару", callback_data="auto")]])
    return InlineKeyboardMarkup([[InlineKeyboardButton("👤 Өзім жауап беремін", callback_data="human")]])


def menu() -> ReplyKeyboardMarkup:
    b = answers.buttons()
    rows = [b[i : i + 2] for i in range(0, len(b), 2)]
    return ReplyKeyboardMarkup(rows, resize_keyboard=True)


# ───────────── Иесіне хабар ─────────────
async def tell_owner(app: Application, key: str, text: str, mode: str) -> None:
    if not OWNER_CHAT_ID:
        log.warning("OWNER_CHAT_ID жоқ — хабарландыру жіберілмеді: %s", text[:200])
        return
    parts = chunks(text)
    for i, part in enumerate(parts):
        last = i == len(parts) - 1
        m = await app.bot.send_message(OWNER_CHAT_ID, part, reply_markup=kb(mode) if last else None)
        store.link_notif(m.message_id, key)


# ───────────── Дизайн жіберу ─────────────
async def send_designs_tg(app: Application, chat_id: int, items: list[dict]) -> None:
    for d in items:
        caption = d["title"] + (f"\n{d['link']}" if d.get("link") else "")
        files = designs.paths(d)[:10]  # Telegram альбомында ең көбі 10 сурет
        if len(files) == 1:
            with files[0].open("rb") as f:
                await app.bot.send_photo(chat_id, f, caption=caption)
            continue
        handles = [p.open("rb") for p in files]
        try:
            media = [InputMediaPhoto(h, caption=caption if i == 0 else None) for i, h in enumerate(handles)]
            await app.bot.send_media_group(chat_id, media)
        finally:
            for h in handles:
                h.close()


async def offer_designs(app: Application, chat_id: int, lang: str) -> None:
    items = designs.load()
    if not items:
        await app.bot.send_message(
            chat_id, "Мысалдарды иесі өзі жібереді 🙌" if lang == "kk" else "Примеры пришлёт владелец 🙌"
        )
        return
    if len(items) <= 3:
        await send_designs_tg(app, chat_id, items)
        return
    # Көп болса — таңдау батырмалары
    rows = [[InlineKeyboardButton(d["title"][:60], callback_data=f"d:{i}")] for i, d in enumerate(items[:30])]
    await app.bot.send_message(
        chat_id,
        "Қайсысын көргіңіз келеді? 👇" if lang == "kk" else "Какой пример показать? 👇",
        reply_markup=InlineKeyboardMarkup(rows),
    )


# ───────────── Клиентке жіберу (иесінің жауабы) ─────────────
async def send_to_customer(app: Application, key: str, text: str) -> None:
    if key.startswith("tg:"):
        for part in chunks(text):
            await app.bot.send_message(int(key[3:]), part)
    elif key.startswith("mail:"):
        meta = store.get_conv(key)["meta"]
        acc = ACCOUNTS[meta["account"]]
        await asyncio.to_thread(
            send_reply, acc, meta["to"], meta.get("subject", ""), text, meta.get("message_id", ""), meta.get("references", "")
        )
    store.add_message(key, "assistant", text)


# ───────────── Telegram: клиенттер ─────────────
async def reply_topic(app: Application, chat_id: int, key: str, topic: dict, lang: str) -> None:
    txt = answers.answer(topic, lang)
    await app.bot.send_message(chat_id, txt, reply_markup=menu())
    store.add_message(key, "assistant", txt)
    if topic.get("send_designs"):
        await offer_designs(app, chat_id, lang)


async def handoff(app: Application, chat_id: int, key: str, title: str, text: str, lang: str, why: str) -> None:
    await app.bot.send_message(chat_id, answers.text("handoff", lang), reply_markup=menu())
    store.upsert_conv(key, mode="human")
    await tell_owner(
        app,
        key,
        f"🔥 {why}\n👤 {title}\n\nКлиент жазды:\n{text}\n\n"
        "↩️ Осы хабарға reply жасап жазсаңыз, клиентке кетеді.\n"
        "Бот бұл клиенттің мәтініне енді жауап бермейді (батырмалар жұмыс істей береді), «Ботқа қайтару» басқанша.",
        "human",
    )


async def on_customer(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    msg, user, app = update.effective_message, update.effective_user, ctx.application
    chat_id = update.effective_chat.id
    key = f"tg:{chat_id}"
    title = f"{user.full_name}" + (f" (@{user.username})" if user.username else "") + " · Telegram"
    base_lang = "ru" if (user.language_code or "").startswith("ru") else "kk"

    async with locks[key]:
        conv = store.get_conv(key)
        store.upsert_conv(key, title=title)

        if not msg.text:  # фото, дауыс, файл → иесіне
            if OWNER_CHAT_ID:
                await tell_owner(app, key, f"📎 {title} файл/дауыс жіберді 👇", "human")
                fwd = await msg.forward(OWNER_CHAT_ID)
                store.link_notif(fwd.message_id, key)
            store.upsert_conv(key, mode="human")
            await msg.reply_text(answers.text("handoff", base_lang), reply_markup=menu())
            return

        text = msg.text.strip()
        lang = answers.lang_of(text, base_lang)
        store.add_message(key, "user", text)

        # 1) Мәзір батырмасы — әрқашан жауап береді
        if text == answers.load()["owner_button"]:
            await handoff(app, chat_id, key, title, text, base_lang, "Клиент сізбен сөйлескісі келеді")
            return
        topic = answers.by_button(text)
        if topic:
            await reply_topic(app, chat_id, key, topic, base_lang)
            return

        # 2) Иесі сөйлесіп жатыр — мәтінді тек иесіне жібереміз
        if conv["mode"] == "human":
            await tell_owner(app, key, f"💬 {title}\n\n{text}\n\n↩️ Жауап беру үшін осы хабарға reply жасаңыз.", "human")
            return

        # 3) Кілт сөздер
        m = answers.match(text)
        for tp in m.topics:
            await reply_topic(app, chat_id, key, tp, lang)
        if m.handoff:
            await handoff(app, chat_id, key, title, text, lang, "Іс: тапсырыс / келісу / адам сұрады")
        elif not m.topic:
            if m.greeting:
                await msg.reply_text(answers.text("greeting", lang), reply_markup=menu())
            else:
                await msg.reply_text(answers.text("unknown", lang), reply_markup=menu())
                await tell_owner(
                    app,
                    key,
                    f"❓ Бот түсінбеген сұрақ\n👤 {title}\n\n{text}\n\n↩️ Жауап беру үшін осы хабарға reply жасаңыз.",
                    "auto",
                )


async def on_design_pick(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    q = update.callback_query
    await q.answer()
    items = designs.load()
    i = int(q.data[2:])
    if 0 <= i < len(items):
        await send_designs_tg(ctx.application, q.message.chat.id, [items[i]])


async def on_start(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    if is_owner(update):
        await on_help(update, ctx)
        return
    lang = "ru" if (update.effective_user.language_code or "").startswith("ru") else "kk"
    await update.effective_message.reply_text(answers.text("greeting", lang), reply_markup=menu())


# ───────────── Telegram: иесі ─────────────
async def on_id(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    await update.effective_message.reply_text(
        f"Сіздің chat ID: {update.effective_chat.id}\n.env файлындағы OWNER_CHAT_ID-ге қойып, ботты қайта қосыңыз."
    )


async def on_help(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    mails = ", ".join(f"{a.name} ({a.address})" for a in MAIL_ACCOUNTS) or "қосылмаған"
    await update.effective_message.reply_text(
        "🤖 newwave бот жұмыс істеп тұр.\n\n"
        f"Пошта: {mails}\n\n"
        "• Бот мәзір мен кілт сөздер бойынша дайын жауап береді (answers.json).\n"
        "• «Іс» болса (тапсырыс, жеңілдік, адам сұраса) — сізге 🔥 хабар келеді.\n"
        "• Бот түсінбеген сұрақ — ❓ хабар келеді.\n"
        "• Жаңа email — 📧 хабар келеді (клиентке автожауап кеткен).\n"
        "• Хабарға reply жасап жазсаңыз — клиентке кетеді (Telegram немесе email).\n"
        "• «🤖 Ботқа қайтару» — бот сол клиентпен қайта сөйлеседі.\n\n"
        "🎨 Дизайн қосу: фото (немесе альбом) жіберіп, астына жазыңыз:\n"
        "#дизайн Кофехана сайты | жылы түстер, мәзір, галерея\n\n"
        "/list — өзіңіз жауап беретін клиенттер\n/designs — дизайн каталогы\n/id — chat ID"
    )


async def on_list(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    if not is_owner(update):
        return
    convs = store.human_convs()
    if not convs:
        await update.effective_message.reply_text("Қазір бәріне бот жауап беріп тұр ✅")
        return
    for c in convs[:20]:
        m = await update.effective_message.reply_text(f"👤 {c['title'] or c['key']}", reply_markup=kb("human"))
        store.link_notif(m.message_id, c["key"])


async def on_button(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    q = update.callback_query
    if not is_owner(update):
        await q.answer()
        return
    key = store.notif_key(q.message.message_id)
    if not key:
        await q.answer("Клиент табылмады")
        return
    mode = q.data
    store.upsert_conv(key, mode=mode)
    await q.answer("Бот қайта жауап береді" if mode == "auto" else "Енді өзіңіз жауап бересіз")
    await q.edit_message_reply_markup(reply_markup=kb(mode))


# ───────────── Иесі: дизайн қосу ─────────────
DESIGN_TAGS = ("#дизайн", "#design", "#портфолио")
album_buf: dict[str, dict] = {}


def _design_caption(text: str | None) -> tuple[str, str] | None:
    """«#дизайн Кофехана сайты | жылы түстер, мәзір» → (атауы, сипаттамасы)."""
    if not text:
        return None
    t = text.strip()
    tag = next((x for x in DESIGN_TAGS if t.lower().startswith(x)), None)
    if not tag:
        return None
    rest = t[len(tag) :].strip()
    title, _, about = rest.partition("|")
    return title.strip() or "Дизайн", about.strip()


async def _finish_design(ctx: ContextTypes.DEFAULT_TYPE, msg: Message, file_ids: list[str], caption: str | None) -> None:
    parsed = _design_caption(caption)
    if not parsed:
        await msg.reply_text(
            "Бұл фотоны дизайн каталогына қосу үшін астына жазыңыз:\n"
            "#дизайн Атауы | қысқаша сипаттама\n\n"
            "Клиентке жіберу үшін 🔥 хабарландыруға reply жасаңыз."
        )
        return
    title, about = parsed
    blobs = []
    for fid in file_ids:
        f = await ctx.bot.get_file(fid)
        blobs.append(bytes(await f.download_as_bytearray()))
    did = await asyncio.to_thread(designs.add, title, about, blobs)
    await msg.reply_text(
        f"✅ Дизайн қосылды: {title} ({len(blobs)} сурет)\nid: {did}\n"
        "Клиент дизайн сұраса, бот енді осыны да көрсетеді. Өшіру: /deldesign " + did
    )


async def on_owner_photo(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    msg: Message = update.effective_message
    fid = msg.photo[-1].file_id  # ең үлкен өлшемі
    if not msg.media_group_id:
        await _finish_design(ctx, msg, [fid], msg.caption)
        return
    g = album_buf.setdefault(msg.media_group_id, {"ids": [], "caption": None, "msg": msg})
    g["ids"].append((msg.message_id, fid))
    if msg.caption:
        g["caption"], g["msg"] = msg.caption, msg
    if len(g["ids"]) == 1:  # альбомның қалған суреттерін күтеміз
        await asyncio.sleep(3)
        g = album_buf.pop(msg.media_group_id)
        await _finish_design(ctx, g["msg"], [f for _, f in sorted(g["ids"])], g["caption"])


async def on_designs(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    items = designs.load()
    if not items:
        await update.effective_message.reply_text("Каталог бос. Фото жіберіп, астына «#дизайн Атауы | сипаттама» деп жазыңыз.")
        return
    lines = [f"• {d['title']} ({len(d['images'])} сурет)\n  id: {d['id']}" for d in items]
    await update.effective_message.reply_text(
        "🎨 Дизайн каталогы:\n\n" + "\n".join(lines) + "\n\nҚосу: фото + «#дизайн Атауы | сипаттама»\nӨшіру: /deldesign id"
    )


async def on_deldesign(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    if not ctx.args:
        await update.effective_message.reply_text("Қолдану: /deldesign id (id-ді /designs көрсетеді)")
        return
    ok = await asyncio.to_thread(designs.remove, ctx.args[0])
    await update.effective_message.reply_text("🗑 Өшірілді" if ok else "Ондай id жоқ. /designs")


async def on_owner(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    msg: Message = update.effective_message
    target = msg.reply_to_message
    key = store.notif_key(target.message_id) if target else None
    if not key and msg.photo:
        await on_owner_photo(update, ctx)
        return
    if not key:
        await msg.reply_text("Клиентке жауап беру үшін 🔥 хабарландыруға reply жасаңыз. /help")
        return
    try:
        if msg.text:
            await send_to_customer(ctx.application, key, msg.text)
        elif key.startswith("tg:"):
            await msg.copy(int(key[3:]))  # фото/файл/дауыс
            store.add_message(key, "assistant", msg.caption or "[файл]")
        else:
            await msg.reply_text("Email-ге тек мәтін жіберуге болады.")
            return
    except Exception as e:
        log.exception("Иесінің жауабы жіберілмеді")
        await msg.reply_text(f"❌ Жіберілмеді: {e}")
        return
    store.upsert_conv(key, mode="human")
    ok = await msg.reply_text("✅ Жіберілді", reply_markup=kb("human"))
    store.link_notif(ok.message_id, key)


# ───────────── Пошта ─────────────
async def handle_email(app: Application, acc, it) -> None:
    key = f"mail:{acc.name}:{it.sender}"
    title = f"{it.sender_name or it.sender} <{it.sender}> · {acc.name}"
    meta = {
        "account": acc.name,
        "to": it.sender,
        "subject": it.subject,
        "message_id": it.message_id,
        "references": it.references,
    }
    text = f"Тақырып: {it.subject}\n\n{it.body}"
    async with locks[key]:
        conv = store.get_conv(key)
        store.upsert_conv(key, title=title, meta=meta)
        store.add_message(key, "user", text)
        last = float(conv["meta"].get("autoreplied", 0) or 0)
        sent = ""
        if conv["mode"] != "human" and time.time() - last > AUTOREPLY_EVERY:
            lang = answers.lang_of(it.subject + " " + it.body)
            m = answers.match(it.subject + " " + it.body)
            body, files = answers.text("email_autoreply", lang), []
            for tp in reversed(m.topics):
                if tp.get("send_designs"):
                    files = [p for d in designs.load()[:3] for p in designs.paths(d)]
                else:
                    body = answers.answer(tp, lang) + "\n\n" + body
            try:
                await asyncio.to_thread(
                    send_reply, acc, it.sender, it.subject, body, it.message_id, it.references, files
                )
                meta["autoreplied"] = time.time()
                sent = "\n\n🤖 Клиентке автожауап кетті."
            except Exception as e:
                log.error("%s: автожауап жіберілмеді: %s", key, e)
        else:
            meta["autoreplied"] = last
        store.upsert_conv(key, meta=meta, mode="human")
    await tell_owner(
        app,
        key,
        f"📧 Жаңа хат · {title}\n\n{text[:3000]}{sent}\n\n↩️ Осы хабарға reply жасасаңыз, жауабыңыз email болып кетеді.",
        "human",
    )


async def mail_loop(app: Application) -> None:
    if not MAIL_ACCOUNTS:
        log.info("Пошта қосылмаған (GMAIL_/MAILRU_ баптаулары жоқ)")
        return
    log.info("Пошта тексеріліп жатыр: %s", ", ".join(a.address for a in MAIL_ACCOUNTS))
    while True:
        for acc in MAIL_ACCOUNTS:
            kv = f"last_uid:{acc.address}"
            last = store.kv_get(kv)
            try:
                items, top = await asyncio.to_thread(fetch_new, acc, int(last) if last else None)
            except Exception as e:
                log.error("%s оқылмады: %s", acc.name, e)
                continue
            store.kv_set(kv, str(top))
            for it in items:
                try:
                    await handle_email(app, acc, it)
                except Exception:
                    log.exception("%s хатын өңдеу қатесі", it.sender)
        await asyncio.sleep(MAIL_POLL_SECONDS)


async def post_init(app: Application) -> None:
    if not OWNER_CHAT_ID:
        log.warning("OWNER_CHAT_ID бос. Ботқа /id деп жазып, ID-ді .env-ке қойыңыз.")
    else:
        try:
            await app.bot.send_message(OWNER_CHAT_ID, "🟢 newwave бот іске қосылды. /help")
        except Exception as e:
            log.warning("Иесіне хабар жіберілмеді (алдымен ботқа /start басыңыз): %s", e)
    app.create_task(mail_loop(app))


def main() -> None:
    if not TELEGRAM_BOT_TOKEN:
        raise SystemExit("TELEGRAM_BOT_TOKEN жоқ. .env.example → .env көшіріп, толтырыңыз.")
    app = Application.builder().token(TELEGRAM_BOT_TOKEN).concurrent_updates(True).post_init(post_init).build()
    owner = filters.Chat(OWNER_CHAT_ID) if OWNER_CHAT_ID else filters.Chat([])
    private = filters.ChatType.PRIVATE

    app.add_handler(CommandHandler("id", on_id))
    app.add_handler(CommandHandler("start", on_start))
    app.add_handler(CommandHandler("help", on_help, filters=owner))
    app.add_handler(CommandHandler("list", on_list, filters=owner))
    app.add_handler(CommandHandler("designs", on_designs, filters=owner))
    app.add_handler(CommandHandler("deldesign", on_deldesign, filters=owner))
    app.add_handler(CallbackQueryHandler(on_button, pattern="^(auto|human)$"))
    app.add_handler(CallbackQueryHandler(on_design_pick, pattern="^d:[0-9]+$"))
    app.add_handler(MessageHandler(owner & private & ~filters.COMMAND, on_owner))
    app.add_handler(MessageHandler(private & ~owner & ~filters.COMMAND, on_customer))
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
