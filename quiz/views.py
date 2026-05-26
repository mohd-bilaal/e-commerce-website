import random

from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt

from .models import Question


QUIZ_DURATION_SECONDS = 30 * 60


def start(request):
    total_questions = Question.objects.filter(is_active=True).count()
    return render(
        request,
        "quiz/start.html",
        {
            "total_questions": total_questions,
            "duration_minutes": QUIZ_DURATION_SECONDS // 60,
        },
    )


def quiz(request):
    if Question.objects.filter(is_active=True).count() == 0:
        return redirect("quiz:start")
    return render(request, "quiz/quiz.html", {"duration_seconds": QUIZ_DURATION_SECONDS})


def result(request):
    latest_result = request.session.get("latest_result")
    if not latest_result:
        return redirect("quiz:start")
    return render(request, "quiz/result.html", latest_result)


def review(request):
    latest_result = request.session.get("latest_result")
    if not latest_result:
        return redirect("quiz:start")
    return render(request, "quiz/review.html", latest_result)


def questions_api(request):
    questions = list(Question.objects.filter(is_active=True))
    random.shuffle(questions)

    payload = []
    for question in questions:
        options = question.options()
        random.shuffle(options)
        payload.append(
            {
                "id": question.id,
                "text": question.text,
                "category": question.category,
                "options": options,
            }
        )

    request.session["quiz_question_ids"] = [question["id"] for question in payload]
    request.session.modified = True
    return JsonResponse({"duration": QUIZ_DURATION_SECONDS, "questions": payload})


@csrf_exempt
def submit_api(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=405)

    try:
        import json

        data = json.loads(request.body.decode("utf-8"))
    except (ValueError, UnicodeDecodeError):
        return JsonResponse({"error": "Invalid submission."}, status=400)

    answers = data.get("answers", {})
    if not isinstance(answers, dict):
        return JsonResponse({"error": "Answers must be an object."}, status=400)

    question_ids = data.get("question_ids") or request.session.get("quiz_question_ids")
    if not question_ids:
        question_ids = list(Question.objects.filter(is_active=True).values_list("id", flat=True))

    questions = list(Question.objects.filter(id__in=question_ids, is_active=True))
    question_map = {question.id: question for question in questions}

    score = 0
    review_rows = []
    for question_id in question_ids:
        question = question_map.get(question_id)
        if not question:
            continue
        selected_key = answers.get(str(question.id), "")
        selected_text = getattr(question, f"option_{selected_key.lower()}", "") if selected_key in ("A", "B", "C", "D") else ""
        is_correct = selected_key == question.correct_option
        if is_correct:
            score += 1
        review_rows.append(
            {
                "question": question.text,
                "category": question.category,
                "selected_key": selected_key or "Not answered",
                "selected_text": selected_text or "Not answered",
                "correct_key": question.correct_option,
                "correct_text": question.correct_answer,
                "is_correct": is_correct,
                "explanation": question.explanation,
            }
        )

    total = len(review_rows)
    percentage = round((score / total) * 100) if total else 0
    if percentage >= 85:
        grade = "Excellent"
    elif percentage >= 70:
        grade = "Great"
    elif percentage >= 50:
        grade = "Good"
    else:
        grade = "Keep Practicing"

    latest_result = {
        "score": score,
        "total": total,
        "percentage": percentage,
        "grade": grade,
        "correct_count": score,
        "incorrect_count": total - score,
        "review_rows": review_rows,
    }
    request.session["latest_result"] = latest_result
    request.session.modified = True
    return JsonResponse({"redirect_url": "/result/"})
