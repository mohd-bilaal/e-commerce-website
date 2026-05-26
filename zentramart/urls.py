from django.contrib import admin
from django.urls import include, path
from shop.views import chat_api

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/chat/", chat_api, name="store_chat_api"),
    path("", include("quiz.urls")),
    path("store/", include("shop.urls")),
]
