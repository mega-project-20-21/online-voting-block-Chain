from django.db import models
import uuid
from django.forms import PasswordInput


class LoginModel(models.Model):
    id = models.UUIDField(default=uuid.uuid4,
                          primary_key=True, unique=True, editable=False)
    userid = models.CharField(null=False, blank=False,
                              max_length=20, unique=True)
    password = models.CharField(
        null=False, blank=False, max_length=40)

    def __str__(self) -> str:
        return str(self.id)
