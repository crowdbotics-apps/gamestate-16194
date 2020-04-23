from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import TaskTransactionViewSet, RatingViewSet, MessageViewSet

router = DefaultRouter()
router.register("message", MessageViewSet)
router.register("tasktransaction", TaskTransactionViewSet)
router.register("rating", RatingViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
