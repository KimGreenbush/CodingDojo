from django.shortcuts import render, redirect
from .models import *
import bcrypt
from django.contrib import messages


# Render routes
def index(request):
    return render(request, 'index.html')

def books_all(request):
    if 'uuid' not in request.session:
        return redirect('/')
    context = {
        "logged_user": User.objects.get(id=request.session['uuid']),
        "books": Book.objects.all()
    }
    return render(request,'books_all.html', context)

def books_add(request):
    if 'uuid' not in request.session:
        return redirect('/')
    context = {
        "authors": Book.objects.all().author
    }
    return render(request,'books_add.html', context)

def books_info(request, book_id):
    if 'uuid' not in request.session:
        return redirect('/')
    context = {
        "book": Book.objects.get(id=book_id)
    }
    return render(request,'books_info.html', context)

def users_info(request, user_id):
    if 'uuid' not in request.session:
        return redirect('/')
    context = {
        "user": User.objects.get(id=user_id)
    }
    return render(request,'users_info.html', context)

# Reg/Login/Logout
def register(request):
    errors = User.objects.register_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
            return redirect('/')
    else:
        password = request.POST['password']
        pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        user = User.objects.create(name=request.POST['name'], alias=request.POST['alias'], email=request.POST['email'], password=pw_hash)
        user.save()
        request.session['uuid'] = user.id
        return redirect('/books/')

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
        return redirect('/books/')

def logout(request):
    request.session.flush()
    return redirect('/')

# Redirect/Processing routes
