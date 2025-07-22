from django.shortcuts import render
from .models import Product

# Create your views here.

def product_table(request):
    products = Product.objects.all()
    return render(request, 'product_table.html', {'products': products})