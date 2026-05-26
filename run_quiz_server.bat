@echo off
cd /d C:\Users\User\Desktop\ecom
echo Starting QuizMaster Django server...
echo.
echo Open this link in Chrome:
echo http://127.0.0.1:8000/
echo.
set GEMINI_API_KEY=AIzaSyC-Hnvlpp8DZ-HHuLwUpktn6wQij2s8S5M
C:\Users\User\AppData\Local\Programs\Python\Python312\python.exe manage.py runserver 127.0.0.1:8000 --noreload
pause
