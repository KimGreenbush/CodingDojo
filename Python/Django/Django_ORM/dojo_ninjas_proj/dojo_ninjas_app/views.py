from django.shortcuts import render, redirect
from .models import Ninja, Dojo

def index(request):
    context = {
        "all_ninjas" : Ninja.objects.all(),
        "dojo_locations": Dojo.objects.all()
    }
    return render(request, 'index.html', context)

def new_dojo(request):
    Dojo.objects.create(name=request.POST['dojo-name'], city=request.POST['dojo-city'], state=request.POST['dojo-state'])
    return redirect('/')

def new_ninja(request):
    Ninja.objects.create(first_name=request.POST['first-name'], last_name=request.POST['last-name'], dojo_location=Dojo.objects.get(id=request.POST['dojo-location'])
    )
    return redirect('/')

def delete_dojo(request):
    obsolete = Dojo.objects.get(id=request.POST['dojo-location'])
    obsolete.delete()
    return redirect("/")