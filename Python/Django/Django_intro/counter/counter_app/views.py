from django.shortcuts import render, redirect

def index(request):
    if 'load_count' not in request.session:
        request.session["load_count"] = 1
    else:
        request.session["load_count"] += 1
    return render(request, 'index.html')

def clear_session(request):
    del request.session["load_count"]
    return redirect("/")
