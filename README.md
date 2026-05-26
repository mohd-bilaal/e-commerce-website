# QuizMaster Django Quiz App

A fully working Django online quiz website with 100 MCQ questions, timer, randomized questions/options, scoring, review page, and Django admin support.

## Setup

Install dependencies:

```powershell
py -m pip install -r requirements.txt --trusted-host pypi.org --trusted-host files.pythonhosted.org
```

Run migrations:

```powershell
C:\Users\User\AppData\Local\Programs\Python\Python312\python.exe manage.py migrate
```

Seed 100 quiz questions:

```powershell
C:\Users\User\AppData\Local\Programs\Python\Python312\python.exe manage.py seed_quiz
```

Create an admin user:

```powershell
C:\Users\User\AppData\Local\Programs\Python\Python312\python.exe manage.py createsuperuser
```

Run locally:

```powershell
C:\Users\User\AppData\Local\Programs\Python\Python312\python.exe manage.py runserver 127.0.0.1:8000
```

Open:

```text
http://127.0.0.1:8000/
```

Admin panel:

```text
http://127.0.0.1:8000/admin/
```

## Main Files

- `quiz/models.py` - Question model
- `quiz/admin.py` - admin panel setup
- `quiz/views.py` - start, quiz, result, review, API views
- `quiz/templates/quiz/` - HTML templates
- `quiz/static/quiz/css/quiz.css` - responsive styling
- `quiz/static/quiz/js/quiz.js` - timer, progress, validation, submit logic
- `quiz/management/commands/seed_quiz.py` - 100 sample questions
- `zentramart/settings.py` and `zentramart/urls.py` - Django project configuration

## Features

- 100 multiple-choice questions
- 4 options and 1 correct answer per question
- Start page, quiz page, result page, review page
- Timer with auto-submit
- Progress bar and question counter
- Randomized question order
- Randomized answer order
- Final score and performance summary
- Correct/incorrect answer review
- Browser localStorage progress saving
- Restart quiz button
- Mobile responsive professional UI
- Django admin support for adding, editing, and deleting questions

The old e-commerce demo is still available at:

```text
http://127.0.0.1:8000/store/
```
