from django.urls import path
from . import views

urlpatterns = [
    path('authors_add/', views.book_to_author),
    path('books_add/', views.author_to_book),
    path('authors/create', views.author_create),
    path('books/create/', views.book_create),
    path('authors/<int:number>/', views.author),
    path('books/<int:number>/', views.book),
    path('authors/', views.authors),
    path('', views.index),
]
