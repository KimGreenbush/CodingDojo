from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages


def index(request):
    return redirect('/shows')

def show_list(request):
    context = {
        "all_shows": Show.objects.all()
    }
    return render(request, 'index.html', context)

def add_show(request):
    return render(request, 'add_show.html')

def create_show(request):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/shows/new/')
    else:
        show_to_create = Show.objects.create(title=(request.POST['show_title']), network=(request.POST['network']), release_date=(request.POST['release_date']), description=request.POST['desc'])
    return redirect('/shows')

def show_page(request, number):
    context = {
        "show": Show.objects.get(id=(number))
    }
    return render(request, 'show.html', context)

def edit_page(request, number):
    show = Show.objects.get(id=(number))
    context = {
            "release_date": show.release_date.strftime("%Y-%m-%d"),
            "show": show
        }
    return render(request, 'edit_show.html', context)

def update_show(request, number):
    print(request.POST)
    show_to_update = Show.objects.get(id=(number))
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
            return redirect('/shows/'+number+'/edit' )
    else:
        show_to_update.title = request.POST['show_title']
        show_to_update.network = request.POST['network']
        show_to_update.release_date = request.POST['release_date']
        show_to_update.description = request.POST['desc']
        show_to_update.save()
        number = show_to_update.id
    return redirect('/shows/%i' %number)

def delete_show(request, number):
    show_to_delete = Show.objects.get(id=(number))
    show_to_delete.delete()
    return redirect('/shows')
