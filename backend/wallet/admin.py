from django.contrib import admin
from .models import TaskerWallet, PaymentMethod, CustomerWallet

admin.site.register(PaymentMethod)
admin.site.register(CustomerWallet)
admin.site.register(TaskerWallet)

# Register your models here.
