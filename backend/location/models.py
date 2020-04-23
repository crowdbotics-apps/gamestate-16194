from django.conf import settings
from django.db import models


class MapLocation(models.Model):
    "Generated Model"
    name = models.CharField(max_length=255,)
    latitude = models.DecimalField(max_digits=12, decimal_places=8,)
    longitude = models.DecimalField(max_digits=12, decimal_places=8,)


class TaskerLocation(models.Model):
    "Generated Model"
    tasker = models.OneToOneField(
        "task_profile.TaskerProfile",
        on_delete=models.CASCADE,
        related_name="taskerlocation_tasker",
    )
    latitude = models.DecimalField(max_digits=12, decimal_places=8,)
    longitude = models.DecimalField(max_digits=12, decimal_places=8,)
    last_updated = models.DateTimeField(auto_now=True,)


# Create your models here.
