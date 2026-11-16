@echo off
chcp 65001 >nul
set PYTHONIOENCODING=utf-8
rem newwave бот: Windows. Осы файлды екі рет басыңыз.
cd /d "%~dp0"
where py >nul 2>nul && (set PY=py -3) || (set PY=python)
%PY% --version >nul 2>nul || (
  echo Python табылмады. https://www.python.org/downloads/ сайтынан орнатыңыз ^(3.10+^), "Add Python to PATH" белгісін қойыңыз.
  pause
  exit /b 1
)
if not exist .venv (
  echo Бірінші іске қосу: керек нәрселерді орнатып жатырмын...
  %PY% -m venv .venv || (pause & exit /b 1)
  .venv\Scripts\python -m pip install -q --upgrade pip
  .venv\Scripts\python -m pip install -q -r requirements.txt || (pause & exit /b 1)
)
if not exist .env (
  .venv\Scripts\python setup.py || (pause & exit /b 1)
)
.venv\Scripts\python bot.py
echo Бот тоқтады.
pause
