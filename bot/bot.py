"""newwave бот: Telegram + Gmail + Mail.ru.

Клиент жазады → Claude жауап береді.
«Іс» болса (тапсырыс, баға, төлем, шағым, адам сұраса) → бот клиентке «өзім жауап беремін» дейді,
сізге Telegram-ға хабар келеді, сіз сол хабарға reply жасап жауап бересіз — ол клиентке кетеді
(Telegram-ға немесе email-ге).

Іске қосу:  python bot.py
"""

import asyncio
import logging
from collections import defaultdict

from telegram import InlineKeyboardButton, InlineKeyboardMarkup, InputMediaPhoto, Message, Update
from telegram.constants import ChatAction
from telegram.ext import (
    Application,
    CallbackQueryHandler,
    CommandHandler,
    ContextTypes,
    MessageHandler,
    filters,
)

import designs
import store
from brain import decide
from config import MAIL_ACCOUNTS, MAIL_POLL_SECONDS, OWNER_CHAT_ID, TELEGRAM_BOT_TOKEN
from mailbox import fetch_new, send_reply

logging.basicConfig(format="%(asctime)s %(levelname)s %(name)s: %(message)s", level=logging.INFO)
logging.getLogger("httpx").setLevel(logging.WARNING)
log = logging.getLogger("bot")

ACK = (
    "Сәлеметсіз бе! Хабарыңыз қабылданды, жақын арада өзім жауап беремін.\n"
    "Здравствуйте! Сообщение получено, скоро отвечу лично."
)
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


# ───────────── Клиентке жіберу ─────────────
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


async def send_to_customer(app: Application, key: str, text: str, design_ids: list[str] | None = None) -> None:
    items = [d for d in (designs.get(i) for i in design_ids or []) if d]
    if key.startswith("tg:"):
        chat_id = int(key[3:])
        for part in chunks(text):
            await app.bot.send_message(chat_id, part)
        if items:
            await app.bot.send_chat_action(chat_id, ChatAction.UPLOAD_PHOTO)
            await send_designs_tg(app, chat_id, items)
    elif key.startswith("mail:"):
        meta = store.get_conv(key)["meta"]
        acc = ACCOUNTS[meta["account"]]
        body = text
        links = [f"{d['title']}: {d['link']}" for d in items if d.get("link")]
        if links:
            body += "\n\n" + "\n".join(links)
        files = [p for d in items for p in designs.paths(d)]
        await asyncio.to_thread(
            send_reply,
            acc,
            meta["to"],
            meta.get("subject", ""),
            body,
            meta.get("message_id", ""),
            meta.get("references", ""),
            files,
        )
    note = ("\n[Жіберілген дизайндар: " + ", ".join(d["title"] for d in items) + "]") if items else ""
    store.add_message(key, "assistant", text + note)


# ───────────── Ортақ логика: клиент хабары ─────────────
async def handle_customer(app: Application, key: str, title: str, channel: str, text: str, meta: dict | None = None) -> None:
    async with locks[key]:
        conv = store.get_conv(key)
        store.upsert_conv(key, title=title, meta=meta if meta is not None else conv["meta"])
        store.add_message(key, "user", text)

        if conv["mode"] == "human":
            await tell_owner(app, key, f"💬 {title}\n\n{text}\n\n↩️ Жауап беру үшін осы хабарға reply жасаңыз.", "human")
            return

        d = await decide(store.history(key), channel)
        if d.ignore and not d.handoff:
            log.info("%s: жауапсыз қалдырылды (%s)", key, d.category)
            return
        reply = d.reply or ACK
        try:
            await send_to_customer(app, key, reply, d.designs)
        except Exception:
            log.exception("%s: клиентке жіберу мүмкін болмады", key)
            reply = "(клиентке жіберілмеді — қате)"

        if d.handoff:
            store.upsert_conv(key, mode="human")
            await tell_owner(
                app,
                key,
                f"🔥 Іс: {d.category_kk}\n👤 {title}\n📝 {d.summary}\n\n"
                f"Клиент жазды:\n{text}\n\n🤖 Бот жауабы:\n{reply}\n"
                + (f"🎨 Дизайн жіберілді: {', '.join(d.designs)}\n" if d.designs else "")
                + "\n"
                "↩️ Осы хабарға reply жасап жазсаңыз, клиентке кетеді. "
                "Бот бұл клиентке енді жауап бермейді, «Ботқа қайтару» басқанша.",
                "human",
            )


# ───────────── Telegram: клиенттер ─────────────
async def on_customer(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    msg, user = update.effective_message, update.effective_user
    key = f"tg:{update.effective_chat.id}"
    title = f"{user.full_name}" + (f" (@{user.username})" if user.username else "") + " · Telegram"
    if not msg.text:
        # Фото, дауыс, файл → иесіне жібереміз
        if OWNER_CHAT_ID:
            await tell_owner(ctx.application, key, f"📎 {title} файл/дауыс жіберді 👇", "human")
            fwd = await msg.forward(OWNER_CHAT_ID)
            store.link_notif(fwd.message_id, key)
        store.upsert_conv(key, title=title, mode="human")
        await msg.reply_text(ACK)
        return
    await ctx.bot.send_chat_action(update.effective_chat.id, ChatAction.TYPING)
    await handle_customer(ctx.application, key, title, "Telegram", msg.text)


async def on_start(update: Update, ctx: ContextTypes.DEFAULT_TYPE) -> None:
    if is_owner(update):
        await on_help(update, ctx)
        return
    await update.effective_message.reply_text(
        "Сәлеметсіз бе! Мен newwave көмекшісімін 👋 Сайт, баға немесе кез келген сұрағыңызды жазыңыз.\n"
        "Здравствуйте! Я помощник newwave — задайте любой вопрос."
    )


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
        "• Бот сұрақтарға өзі жауап береді.\n"
        "• «Іс» болса (тапсырыс, баға, төлем, шағым) — сізге 🔥 хабар келеді.\n"
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
                key = f"mail:{acc.name}:{it.sender}"
                title = f"{it.sender_name or it.sender} <{it.sender}> · {acc.name}"
                meta = {
                    "account": acc.name,
                    "to": it.sender,
                    "subject": it.subject,
                    "message_id": it.message_id,
                    "references": it.references,
                }
                try:
                    await handle_customer(app, key, title, "email", f"Тақырып: {it.subject}\n\n{it.body}", meta)
                except Exception:
                    log.exception("%s хатын өңдеу қатесі", key)
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
    app.add_handler(MessageHandler(owner & private & ~filters.COMMAND, on_owner))
    app.add_handler(MessageHandler(private & ~owner & ~filters.COMMAND, on_customer))
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
