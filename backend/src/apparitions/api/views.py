from rest_framework.generics import ListAPIView, RetrieveAPIView
from apparitions.models import Apparition
from .serializers import ApparitionSerializer

class ApparitionListView(ListAPIView):
    queryset = Apparition.objects.all()
    serializer_class = ApparitionSerializer

class ApparitionDetailView(RetrieveAPIView):
    queryset = Apparition.objects.all()
    serializer_class = ApparitionSerializer
