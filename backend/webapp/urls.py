from django.urls import path
from .import views

urlpatterns = [
   path('product-table', views.product_table, name='product_table'),
]
