from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return render(request,'HomePage.html')

def EnterRegistration(request):
    return render(request,'Register.html')