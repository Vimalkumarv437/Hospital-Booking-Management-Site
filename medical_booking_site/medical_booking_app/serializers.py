from rest_framework import serializers
from .models import CustomUser
from .models import Appointment, Department, Doctor




class SignupSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['name', 'email', 'age', 'gender', 'contact_number', 'address', 'password', 'confirm_password']

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({"confirm_password": "Passwords do not match."})
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = CustomUser.objects.create_user(**validated_data)
        return user
    

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'name', 'age', 'gender', 'contact_number', 'address', 'password']



 # serializer for Appointment 


class AppointmentSerializer(serializers.ModelSerializer):
   
    department_name = serializers.CharField(source='department.name', read_only=True)
    doctor_name = serializers.CharField(source='doctor.name', read_only=True)

    class Meta:
        model = Appointment
        fields = ['department_name', 'doctor_name', 'date', 'user']
        read_only_fields = ['department_name', 'doctor_name']  # These fields are auto-populated from foreign keys

    def validate(self, data):
        """
        Custom validation for the appointment creation
        Example: You might want to add checks to ensure the doctor is available on the selected date.
        """
        return data
 



       #serializer for doctor list



class DoctorSerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(source='department.name', read_only=True)

    class Meta:
        model = Doctor
        fields = ['id', 'name', 'department_name', 'qualification', 'experience', 'image']

# Serializer for profile 
class CustomUserProfileSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'name', 'age', 'gender', 'contact_number', 'address', 'image']
        read_only_fields = ['email'] 



class AppointmentSerializer(serializers.ModelSerializer):
    doctor_name = serializers.CharField(source='doctor.name')
    department_name = serializers.CharField(source='doctor.department.name')
    qualification = serializers.CharField(source='doctor.qualification')
    experience = serializers.IntegerField(source='doctor.experience')
    image = serializers.ImageField(source='doctor.image', use_url=True)  # Use ImageField with use_url=True

    class Meta:
        model = Appointment
        fields = ['doctor_name', 'department_name', 'qualification', 'experience', 'image', 'date']



class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name']

class DoctorSSerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(source='department.name', read_only=True)  # Display department name
    department_id = serializers.IntegerField(source='department.id', read_only=True)  # Include department ID

    class Meta:
        model = Doctor
        fields = ['id', 'name', 'department_name', 'department_id', 'qualification', 'experience', 'image']



class DoctorSerializer(serializers.ModelSerializer):
    # Convert the ImageField to a URL for proper serialization
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Doctor
        fields = ['id', 'name', 'department_name', 'qualification', 'experience', 'contact_number', 'image']


