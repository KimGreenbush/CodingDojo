from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime, localtime
import datetime

def root(request):
    context = {
        "time": strftime("%Y-%m-%d %H:%M", localtime()),
        "time2": strftime("%A, Week: %W"),
        "time3": datetime.datetime.now()
    }
    return render(request,'index.html', context)
