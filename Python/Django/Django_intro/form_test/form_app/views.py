from django.shortcuts import render, redirect


def index(request):
    return render(request, "index.html")


def create_user(request):
    name_from_form = request.POST['name']
    email_from_form = request.POST['email']
    dob_from_form = request.POST['birthdate']
    hobbies_from_form = request.POST['hobbies']
    context = {
        "name_on_template": name_from_form,
        "email_on_template": email_from_form,
        "dob_on_template": dob_from_form,
        "hobbies_on_template": hobbies_from_form,
    }
    return redirect("/success")

def success(request):
    return render(request, "success.html")
