from django.shortcuts import HttpResponse
from django.conf import settings
import requests
from .forms import SubmitSong
from apparitions.api.serializers import SongSerializer


# Take in URL with SongID Parameter
    #check if request is valid
# Check if song is already in database
# if not
    # Save to database and return song details 
# If else
    # return apparitions and song details