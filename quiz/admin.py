from django.contrib import admin

from .models import Question


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("id", "short_text", "category", "correct_option", "is_active")
    list_filter = ("category", "is_active", "correct_option")
    search_fields = ("text", "option_a", "option_b", "option_c", "option_d")
    list_editable = ("is_active",)

    fieldsets = (
        ("Question", {"fields": ("text", "category", "is_active")}),
        ("Options", {"fields": ("option_a", "option_b", "option_c", "option_d", "correct_option")}),
        ("Review Help", {"fields": ("explanation",)}),
    )

    def short_text(self, obj):
        return obj.text[:70]
