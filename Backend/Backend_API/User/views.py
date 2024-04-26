from django.shortcuts import render
from .serializers import BookSerializer

# Create your views here.

def test(request):
    return render(request,"User/test.html")
