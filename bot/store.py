"""SQLite: сөйлесу тарихы, режим (бот / өзіңіз), хабарландыру сілтемелері."""

import json
import sqlite3
import time
from typing import Any

from config import DB_PATH

HISTORY_LIMIT = 20  # Claude-ға жіберілетін соңғы хабарлар саны

_db = sqlite3.connect(DB_PATH, check_same_thread=False)
_db.row_factory = sqlite3.Row
_db.executescript(
    """
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT NOT NULL, role TEXT NOT NULL, text TEXT NOT NULL, ts REAL NOT NULL
);
CREATE INDEX IF NOT EXISTS messages_key ON messages(key, id);
CREATE TABLE IF NOT EXISTS convs (
  key TEXT PRIMARY KEY,
  mode TEXT NOT NULL DEFAULT 'auto',   -- auto: бот жауап береді; human: өзіңіз
  title TEXT NOT NULL DEFAULT '',
  meta TEXT NOT NULL DEFAULT '{}',
  updated REAL NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS notif (msg_id INTEGER PRIMARY KEY, key TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS kv (k TEXT PRIMARY KEY, v TEXT NOT NULL);
"""
)
_db.commit()


def add_message(key: str, role: str, text: str) -> None:
    _db.execute(
        "INSERT INTO messages(key, role, text, ts) VALUES (?,?,?,?)",
        (key, role, text, time.time()),
    )
    _db.commit()


def history(key: str) -> list[dict[str, str]]:
    rows = _db.execute(
        "SELECT role, text FROM messages WHERE key=? ORDER BY id DESC LIMIT ?",
        (key, HISTORY_LIMIT),
    ).fetchall()
    return [{"role": r["role"], "content": r["text"]} for r in reversed(rows)]


def get_conv(key: str) -> dict[str, Any]:
    r = _db.execute("SELECT * FROM convs WHERE key=?", (key,)).fetchone()
    if not r:
        return {"key": key, "mode": "auto", "title": "", "meta": {}}
    return {"key": key, "mode": r["mode"], "title": r["title"], "meta": json.loads(r["meta"])}


def upsert_conv(key: str, *, title: str | None = None, meta: dict | None = None, mode: str | None = None) -> None:
    cur = get_conv(key)
    _db.execute(
        "INSERT OR REPLACE INTO convs(key, mode, title, meta, updated) VALUES (?,?,?,?,?)",
        (
            key,
            mode or cur["mode"],
            title if title is not None else cur["title"],
            json.dumps(meta if meta is not None else cur["meta"], ensure_ascii=False),
            time.time(),
        ),
    )
    _db.commit()


def human_convs() -> list[dict[str, Any]]:
    rows = _db.execute("SELECT key FROM convs WHERE mode='human' ORDER BY updated DESC").fetchall()
    return [get_conv(r["key"]) for r in rows]


def link_notif(msg_id: int, key: str) -> None:
    _db.execute("INSERT OR REPLACE INTO notif(msg_id, key) VALUES (?,?)", (msg_id, key))
    _db.commit()


def notif_key(msg_id: int) -> str | None:
    r = _db.execute("SELECT key FROM notif WHERE msg_id=?", (msg_id,)).fetchone()
    return r["key"] if r else None


def kv_get(k: str) -> str | None:
    r = _db.execute("SELECT v FROM kv WHERE k=?", (k,)).fetchone()
    return r["v"] if r else None


def kv_set(k: str, v: str) -> None:
    _db.execute("INSERT OR REPLACE INTO kv(k, v) VALUES (?,?)", (k, v))
    _db.commit()
