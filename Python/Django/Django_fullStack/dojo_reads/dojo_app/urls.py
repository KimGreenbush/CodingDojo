from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register/', views.register),
    path('login/', views.login),
    path('logout/', views.logout),
    path('books/', views.books_all),
    path('books/add', views.books_add),
    path('books/<int:book_id>', views.books_info),
    path('users/<int:user_id>', views.users_info)
]
