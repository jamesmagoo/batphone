from django.db import models
from users.models import CustomUser

# Save Songs used on frontend in database
class SavedSong(models.Model):
    songID = models.IntegerField(primary_key=True, default='')
    songName = models.CharField(max_length=200)
    songArtist = models.CharField(max_length=200)

    def __str__(self):
        return self.songName

#Apparition Posts
class Apparition(models.Model):
    song = models.ForeignKey(SavedSong, to_field= 'songID', on_delete=models.CASCADE ,)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    content = models.TextField(max_length=280)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content