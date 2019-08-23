from django.db import models
from users.models import CustomUser

class Apparition(models.Model):
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    #song = models.ForeignKey(Songs)
    body = models.TextField(max_length=280)
    created_at = models.DateTimeField(auto_now_add=True)

def __str__(self):
    return self.author
