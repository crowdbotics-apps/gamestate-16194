from rest_framework import serializers
from location.models import TaskerLocation, MapLocation


class MapLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = MapLocation
        fields = "__all__"


class TaskerLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskerLocation
        fields = "__all__"
