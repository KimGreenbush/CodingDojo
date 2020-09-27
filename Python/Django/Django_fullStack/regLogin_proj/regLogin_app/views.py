from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages
import bcrypt

def index(request):
    return render(request, 'index.html')

def register(request):
    errors = User.objects.register_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        password = request.POST['password']
        pw_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode()
        user =User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=pw_hash)
        user.save()
        print("LOOK HERE", pw_hash)
        request.session['uuid'] = user.id
        return redirect('/success')

def login(request):
    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        user = User.objects.filter(email=request.POST['email'])
        logged_user = user[0]
        request.session['uuid'] = logged_user.id
        return redirect('/success')

def success(request):
    if 'uuid' not in request.session:
        return redirect('/')
    context = {
        "User": User.objects.get(id=request.session['uuid']).first_name
    }
    return render(request, 'success.html', context)

def logout(request):
    del request.session['uuid']
    return redirect('/')
