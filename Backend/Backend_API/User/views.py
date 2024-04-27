from rest_framework import viewsets
from .models import EmployeeUserProfile
from .serializers import EmployeeUserSerializer
from rest_framework.generics import RetrieveAPIView



class EmployeeUserViewSet(viewsets.ModelViewSet):
    queryset = EmployeeUserProfile.objects.all()
    serializer_class = EmployeeUserSerializer


class EmployeeUserProfileDetailView(RetrieveAPIView):
    queryset = EmployeeUserProfile.objects.all()
    serializer_class = EmployeeUserSerializer