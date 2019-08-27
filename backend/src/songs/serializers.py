from rest_framework import serializers
#from apparitions.models import Apparition

class SongSerializer(serializers.ModelSerializer):
  class Meta:
        model = Apparition
        fields = ('pk','author','content','created_at') 