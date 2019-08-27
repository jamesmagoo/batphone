from django.shortcuts import render
import requests

def getSongs(request):
    response=requests.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.SONG_APP_MM_KEY}')
    songdata=response.json()
    return render(request,
    {
        'track': songdata['track'],
        'artist':songdata['artist']
    }
    )