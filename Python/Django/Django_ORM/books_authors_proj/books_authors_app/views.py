from django.shortcuts import render, redirect
from .models import *

def index(request):
    context = {
        "all_books": Book.objects.all(),
        "all_authors": Author.objects.all()
    }
    return render(request, 'index.html', context)

def authors(request):
    context = {
        "all_books": Book.objects.all(),
        "all_authors": Author.objects.all()
    }
    return render(request,'author_index.html', context)

def book_create(request):
    Book.objects.create(title=request.POST['book-title'], desc=request.POST['book-desc'])
    return redirect("/")

def author_create(request):
    Author.objects.create(first_name=request.POST['author-first'], last_name=request.POST['author-last'], notes=request.POST['author-notes'])
    return redirect("/authors")

def book(request, number):
    context = {
        "book": Book.objects.get(id=number),
        "not_authors": Author.objects.exclude(books=Book.objects.get(id=number))
    }
    request.session['book_id'] = number
    return render(request,'book.html', context)

def author(request, number):
    context = {
        "author": Author.objects.get(id=number),
        "not_books": Book.objects.exclude(authors=Author.objects.get(id=number))
    }
    request.session['author_id'] = number
    return render(request,'author.html', context)

def author_to_book(request):
    Book.objects.get(id=request.session['book_id']).authors.add(Author.objects.get(id=request.POST['authors']))
    number = request.session['book_id']
    return redirect('/books/%i/' % number)

def book_to_author(request):
    Author.objects.get(id=request.session['author_id']).books.add(Book.objects.get(id=request.POST['books']))
    number = request.session['author_id']
    return redirect('/authors/%i/' %number)
