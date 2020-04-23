from django.contrib import admin
from .models import TaskTransaction, Rating, Message

admin.site.register(Message)
admin.site.register(TaskTransaction)
admin.site.register(Rating)

# Register your models here.
