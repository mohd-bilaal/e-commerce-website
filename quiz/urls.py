from django.urls import path

from . import views

app_name = "quiz"

urlpatterns = [
    path("", views.start, name="start"),
    path("quiz/", views.quiz, name="quiz"),
    path("result/", views.result, name="result"),
    path("review/", views.review, name="review"),
    path("api/questions/", views.questions_api, name="questions_api"),
    path("api/submit/", views.submit_api, name="submit_api"),
]
