#!/usr/bin/env bash
# newwave бот: Mac / Linux. Терминалда:  bash start.sh  (немесе екі рет басу)
cd "$(dirname "$0")" || exit 1
PY=$(command -v python3 || command -v python)
if [ -z "$PY" ]; then
  echo "Python табылмады. https://www.python.org/downloads/ сайтынан орнатыңыз (3.10+)."
  read -r -p "Enter басыңыз..." _; exit 1
fi
if [ ! -d .venv ]; then
  echo "Бірінші іске қосу: керек нәрселерді орнатып жатырмын..."
  "$PY" -m venv .venv || exit 1
  .venv/bin/python -m pip install -q --upgrade pip
  .venv/bin/python -m pip install -q -r requirements.txt || exit 1
fi
if [ ! -f .env ]; then
  .venv/bin/python setup.py || exit 1
fi
.venv/bin/python bot.py
read -r -p "Бот тоқтады. Enter басыңыз..." _
