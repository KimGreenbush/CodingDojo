from django.shortcuts import render, redirect
from .models import User

def index(request):
    context = {
        "all_of_the_users": User.objects.all()
    }
    return render(request, "admin_index.html", context)

def add(request):
    request.session['first_name'] = request.POST['first-name']
    request.session['last_name'] = request.POST['last-name']
    request.session['email'] = request.POST['email']
    request.session['age'] = request.POST['age']
    User.objects.create(first_name=request.session['first_name'], last_name=request.session['last_name'], email_address=request.session['email'], age=request.session['age'])
    return redirect('/')