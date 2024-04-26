from django.db import models
from django.contrib.auth.models import User

class EmployeeUserProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    profile_photo = models.ImageField(upload_to="User/images/employee")
    
    def __str__(self):
        return self.user.first_name

