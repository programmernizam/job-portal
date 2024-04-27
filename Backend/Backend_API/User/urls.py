from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmployeeUserViewSet,EmployeeUserProfileDetailView

router = DefaultRouter()
router.register(r'', EmployeeUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('employee-profile/<int:pk>/', EmployeeUserProfileDetailView.as_view(), name='employee-profile-detail'),
]
