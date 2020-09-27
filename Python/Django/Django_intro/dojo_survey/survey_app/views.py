from django.shortcuts import render, redirect

def index(request):
    return render(request, 'index.html')

def result(request):
    name = request.POST['name']
    location = request.POST['location']
    language = request.POST['language']
    stack = request.POST['stack']
    comment = request.POST['comment']
    context = {
        "name" : name,
        "location" : location,
        "language" : language,
        "stack" : stack,
        "comment" : comment
    }
    return render(request, 'result.html', context)
