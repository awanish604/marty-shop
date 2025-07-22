from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    status = models.CharField(max_length=50, choices=[("Active", "Active"), ("Out of Stock", "Out of Stock")])

    def __str__(self):
        return self.name