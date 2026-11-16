"""Дизайн каталогы: bot/designs/designs.json + суреттер.

Клиент «дизайн көрсетіңіз» десе, бот осы жерден таңдап жібереді.
Жаңа дизайнды ботқа фото жіберіп, астына «#дизайн Атауы | сипаттама» деп жазып қосасыз.
"""

import json
import re
import threading
from pathlib import Path

from config import ROOT

DIR = ROOT / "designs"
CATALOG = DIR / "designs.json"
_lock = threading.Lock()


def load() -> list[dict]:
    if not CATALOG.exists():
        return []
    items = json.loads(CATALOG.read_text(encoding="utf-8"))
    # тек суреті бар дизайндар
    out = []
    for d in items:
        imgs = [i for i in d.get("images", []) if (DIR / i).exists()]
        if imgs:
            out.append({**d, "images": imgs})
    return out


def _save(items: list[dict]) -> None:
    CATALOG.write_text(json.dumps(items, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def get(design_id: str) -> dict | None:
    return next((d for d in load() if d["id"] == design_id), None)


def paths(d: dict) -> list[Path]:
    return [DIR / i for i in d["images"]]


def slug(text: str) -> str:
    s = re.sub(r"[^\w]+", "-", text.lower(), flags=re.U).strip("-")
    return s[:40] or "design"


def add(title: str, about: str, image_bytes: list[bytes]) -> str:
    """Жаңа дизайн қосады, id қайтарады."""
    with _lock:
        raw = json.loads(CATALOG.read_text(encoding="utf-8")) if CATALOG.exists() else []
        base = slug(title)
        did, n = base, 2
        while any(d["id"] == did for d in raw):
            did, n = f"{base}-{n}", n + 1
        files = []
        for i, data in enumerate(image_bytes, 1):
            name = f"{did}-{i}.jpg"
            (DIR / name).write_bytes(data)
            files.append(name)
        raw.append({"id": did, "title": title, "about": about or title, "images": files, "link": ""})
        _save(raw)
        return did


def remove(design_id: str) -> bool:
    with _lock:
        raw = json.loads(CATALOG.read_text(encoding="utf-8")) if CATALOG.exists() else []
        keep = [d for d in raw if d["id"] != design_id]
        if len(keep) == len(raw):
            return False
        gone = next(d for d in raw if d["id"] == design_id)
        used = {i for d in keep for i in d.get("images", [])}
        for img in gone.get("images", []):
            if img not in used and (DIR / img).exists():
                (DIR / img).unlink()
        _save(keep)
        return True
