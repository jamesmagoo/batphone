from django.urls import path
from .views import ApparitionListView , SavedSongsView, SavedSongsListView , ApparitionCreateView, ApparitionSongListView

urlpatterns = [
     path('apparitions', ApparitionListView.as_view()),
     path('apparitions/create', ApparitionCreateView.as_view()),
     path('apparitions/<int:songID>', ApparitionSongListView.as_view()),
     path('songs', SavedSongsView.as_view()),
     path('songs/all', SavedSongsListView.as_view()),
]
