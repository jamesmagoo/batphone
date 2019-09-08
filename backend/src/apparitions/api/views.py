from rest_framework.generics import ListAPIView , CreateAPIView
from apparitions.models import SavedSong, Apparition
from .serializers import ApparitionSerializer, SongSerializer

class ApparitionCreateView(CreateAPIView):
     queryset = Apparition.objects.all()
     serializer_class = ApparitionSerializer

class ApparitionListView(ListAPIView):
     queryset = Apparition.objects.all()
     serializer_class = ApparitionSerializer


class ApparitionSongListView(ListAPIView):
     serializer_class = ApparitionSerializer

     def get_queryset(self):
        """
        This view should return a list of all the apparitions for
        the song as determined by the songID portion of the URL.
        """
        songID = self.kwargs['songID']
        return Apparition.objects.filter(song=songID)

class SavedSongsView(CreateAPIView):
     queryset = SavedSong.objects.all()
     serializer_class = SongSerializer

class SavedSongsListView(ListAPIView):
     queryset = SavedSong.objects.all()
     serializer_class = SongSerializer