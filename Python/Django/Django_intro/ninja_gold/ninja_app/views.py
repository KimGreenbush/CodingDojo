from django.shortcuts import render, redirect
import random
from time import strftime,  localtime

def index(request):
    time = strftime("%Y-%m-%d %H:%M", localtime())
    if 'gold_total' not in request.session:
        request.session['gold_total'] = 0
    else:
        request.session['gold_total'] += request.session['gold']
    if 'activity_log' not in request.session:
        request.session['activity_log'] = []
    elif request.session['gold_location'] == "casino":
        if request.session['gold'] < 0:
            request.session['activity_log'].append(
                ("<p class='lost'>Lost " + str(abs(request.session['gold'])) + ' gold at the ' + request.session['gold_location'] + " " + str(time) + "</p>"))
        else:
            request.session['activity_log'].append(
                ("<p class='earned'>Won " + str(request.session['gold']) + ' gold at the ' + request.session['gold_location'] + " " + str(time) + "</p>"))
    else:
        request.session['activity_log'].append(("<p class='earned'>Earned " + str(request.session['gold']) + ' gold at the ' + request.session['gold_location'] + " " + str(time) + "</p>"))
        request.session.save()
    return render(request, 'index.html')

def process_money(request):
    request.session['gold_location'] = request.POST['location']
    if request.session["gold_location"] == "farm":
        request.session['gold'] = random.randint(10, 20)
        return redirect('/')
    if request.session["gold_location"] == "cave":
        request.session['gold'] = random.randint(5, 10)
        return redirect('/')
    if request.session["gold_location"] == "house":
        request.session['gold'] = random.randint(2, 5)
        return redirect('/')
    if request.session["gold_location"] == "casino":
        request.session['gold'] = random.randint(-50, 50)
        return redirect('/')

