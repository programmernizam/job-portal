from rest_framework import viewsets
from .models import EmployeeUserProfile
from .serializers import EmployeeUserSerializer



class EmployeeUserViewSet(viewsets.ModelViewSet):
    queryset = EmployeeUserProfile.objects.all()
    serializer_class = EmployeeUserSerializer
