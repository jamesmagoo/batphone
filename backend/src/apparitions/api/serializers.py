from rest_framework import serializers
from apparitions.models import Apparition, SavedSong

class ApparitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apparition
        fields = ('pk','author','content','created_at','song') 


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedSong
        fields = ('songID','songName','songArtist')