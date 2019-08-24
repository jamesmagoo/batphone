from django.urls import path
from .views import ApparitionListView, ApparitionDetailView

urlpatterns = [
    path('', ApparitionListView.as_view()),
    path('<pk>', ApparitionDetailView.as_view()),
]
