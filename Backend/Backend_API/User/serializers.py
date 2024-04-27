from rest_framework import serializers
from .models import EmployeeUserProfile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class EmployeeUserSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = EmployeeUserProfile
        fields = '__all__'