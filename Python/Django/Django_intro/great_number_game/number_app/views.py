from django.shortcuts import render, redirect
import random

def root(request):
    request.session['num'] = str(random.randint(1, 100))
    request.session["tries"] = 0
    return render(request, 'index.html')

def guess(request):
    request.session['tries'] += 1
    if request.session["tries"] < 6:
        if request.session['num'] == request.GET['guess']:
            request.session['lowHigh'] = "Correct!!!"
            return render(request, 'correct.html')
        elif request.session['num'] > request.GET['guess']:
            request.session['lowHigh'] = "Too low!"
            return render(request, 'incorrect.html')
        elif request.session['num'] < request.GET['guess']:
            request.session['lowHigh'] = "Too high!"
            return render(request, 'incorrect.html', )
    else:
        request.session['lowHigh'] = "You Lose :c"
        return render(request, 'incorrect.html',)
