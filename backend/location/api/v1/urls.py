from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import TaskerLocationViewSet, MapLocationViewSet

router = DefaultRouter()
router.register("maplocation", MapLocationViewSet)
router.register("taskerlocation", TaskerLocationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
