from django.db import models


class Question(models.Model):
    text = models.TextField(unique=True)
    option_a = models.CharField(max_length=255)
    option_b = models.CharField(max_length=255)
    option_c = models.CharField(max_length=255)
    option_d = models.CharField(max_length=255)
    correct_option = models.CharField(
        max_length=1,
        choices=[
            ("A", "Option A"),
            ("B", "Option B"),
            ("C", "Option C"),
            ("D", "Option D"),
        ],
    )
    category = models.CharField(max_length=80, default="General Knowledge")
    explanation = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return self.text[:80]

    @property
    def correct_answer(self):
        return getattr(self, f"option_{self.correct_option.lower()}")

    def options(self):
        return [
            {"key": "A", "text": self.option_a},
            {"key": "B", "text": self.option_b},
            {"key": "C", "text": self.option_c},
            {"key": "D", "text": self.option_d},
        ]
