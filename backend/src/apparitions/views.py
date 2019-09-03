from django.shortcuts import HttpResponse
from django.conf import settings
import requests
from .forms import SubmitSong
from apparitions.api.serializers import SongSerializer

#def SaveSong(request):
    # Take in URL with SongID Parameter
    #return (blank=True, null=True)


# Check if song is already in database
# Return Song Details & Apparitions
# If song is not in database
# Save to database and return song details & apparit