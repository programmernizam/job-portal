from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmployeeUserViewSet

router = DefaultRouter()
router.register(r'', EmployeeUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
