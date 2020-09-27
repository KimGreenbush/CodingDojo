from django.urls import path
from . import views

urlpatterns = [
    path('shows/new/', views.add_show),
    path('shows/create/', views.create_show),
    path('shows/<number>/update/', views.update_show),
    path('shows/<number>/edit/', views.edit_page),
    path('shows/<number>/', views.show_page),
    path('shows/<number>/destroy/', views.delete_show),
    path('shows/', views.show_list),
    path('', views.index)
]