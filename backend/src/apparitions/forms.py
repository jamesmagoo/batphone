from django import forms

class SubmitSong(forms.Form):
    url = forms.URLField()