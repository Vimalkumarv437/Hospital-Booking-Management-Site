from django.shortcuts import render,redirect,get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser
from .serializers import SignupSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate,login
from django.contrib import messages
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from .models import Doctor
from .serializers import DoctorSerializer
from rest_framework.parsers import JSONParser
from .serializers import CustomUserProfileSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Department, Doctor, Appointment
from .serializers import AppointmentSerializer
from datetime import date
from .serializers import CustomUserProfileSerializer
from .serializers import DepartmentSerializer, DoctorSerializer
from django.http import JsonResponse
from django.db.models import Count,Q
from datetime import datetime
from django.core.exceptions import ValidationError
from django.core.paginator import Paginator
from .serializers import DoctorSSerializer
from django.contrib.auth.decorators import login_required


# Adimn views starts here 
# Views for login page 

def login_page(request):
    if request.method=="POST":
        email=request.POST.get('email')
        password=request.POST.get('password')

        user=authenticate(request,email=email,password=password)


        if user is not None:
            login(request,user)
            return redirect('Appointment/')
        else:
            messages.error(request, "Invalid username or password.")
            
    return render(request,'pages/Login.html')


# views for Appoinment page


@login_required
def Appoinment_page(request):
    search_query = request.GET.get('search', '')
    date_filter = request.GET.get('date', '')  

    # Filter appointments based on the search query and/or date
    appointments = Appointment.objects.select_related('user', 'doctor', 'department')

    if search_query:
        appointments = appointments.filter(department__name__icontains=search_query)

    if date_filter:
        appointments = appointments.filter(date=date_filter)

    # Apply pagination
    paginator = Paginator(appointments, 5)  
    page_number = request.GET.get('page')  # Get the page number from GET parameters
    page_obj = paginator.get_page(page_number)  # Get the current page of appointments

    return render(request, 'pages/Appointment.html', {
        'appointments': page_obj,  # Pass the paginated appointments to the template
        'search_query': search_query,  # Pass the search query back to the template
        'date_filter': date_filter,  # Pass the date filter back to the template
    })






# views for list of users page




def ListOfUsers_page(request):
    users_list = CustomUser.objects.all()
    paginator = Paginator(users_list, 5)  # 5 users per page

    page_number = request.GET.get('page')  # Get the current page number from the request
    users = paginator.get_page(page_number)  # Get the users for the current page

    return render(request, 'pages/ListOfUsers.html', {'users': users})


# views for list user view page 

def listuserView_page(request,id):
 
    user = get_object_or_404(CustomUser, id=id)

    return render(request,'pages/ViewsForUsers.html', {'user': user})

# views for users history for admin

def History_page(request,id):

    user = get_object_or_404(CustomUser, id=id)
    appointments = Appointment.objects.filter(user=user)
    

    return render(request,'pages/HistoryForUsers.html',{'user': user,'appointments': appointments})





# views for doctor listing page 
def doctorlist_page(request):
    doctors_list = Doctor.objects.all()  # Fetch all doctors
    paginator = Paginator(doctors_list, 5)  # 5 doctors per page

    page_number = request.GET.get('page')  # Get current page number from request
    doctors = paginator.get_page(page_number)  # Get the doctors for the current page

    return render(request, 'pages/DoctorsList.html', {'doctors': doctors})

# views for creating doctors page 

def Createdoctor_page(request):



    if request.method == "POST":
        # Get form data from request
        name = request.POST.get('name')
        image = request.FILES.get('image')  # Handle file upload
        qualification = request.POST.get('qualification')
        experience = request.POST.get('experience')
        department_name = request.POST.get('department')
        contact_number = request.POST.get('contact')

        # Find or create the department
        department = Department.objects.filter(name=department_name).first()

        if not department:
            messages.error(request, "Invalid department")
            return render(request, 'create_doctor.html')

        try:
            # Create new doctor instance
            doctor = Doctor(
                name=name,
                qualification=qualification,
                experience=experience,
                department=department,
                contact_number=contact_number,
                image=image if image else None,  # Save image if provided
            )
            doctor.save()
            messages.success(request, "Doctor created successfully")
            return redirect('DoctorsList')  # Redirect to doctor list after creation
        except ValidationError as e:
            messages.error(request, str(e))

  

    return render(request,'pages/CreateDoctor.html')


# views for showing doctor details in view page 

def DoctorDetails_page(request,id):


 doctor = get_object_or_404(Doctor, pk=id)

 return render(request,'pages/ViewsForDoctors.html',{'doctor': doctor})


# views for editing doctor profile edit page

def EditingDoctor_page(request,id):
    doctor = get_object_or_404(Doctor, pk=id)

    # Handle POST request when form is submitted
    if request.method == "POST":
        # Retrieve data from the form
        name = request.POST.get('name')
        qualification = request.POST.get('qualification')
        experience = request.POST.get('experience')
        contact_number = request.POST.get('contact')
        department_name = request.POST.get('department')  # The department is a string

        # Look up the department instance by its name
        department = get_object_or_404(Department, name=department_name)

        # Update doctor details
        doctor.name = name
        doctor.qualification = qualification
        doctor.experience = experience
        doctor.contact_number = contact_number
        doctor.department = department  # Assign the Department instance here
        
        # Handle image upload if applicable
        if 'image' in request.FILES:
            doctor.image = request.FILES['image']
        
        doctor.save()  # Save the updated details
        return redirect('Doctordetails', id=doctor.id)  # Redirect to the doctor details page after saving

    return render(request,'pages/EditingDoctorprofile.html',{'doctor': doctor})




def disable_doctor(request, id):
    # Get the doctor object, or return a 404 if not found
    doctor = get_object_or_404(Doctor, id=id)
    
    # Set the doctor as disabled
    doctor.is_enabled = False
    doctor.save()
    
    # Redirect back to the doctor list page
    return redirect('DoctorsList')  




def enable_doctor(request, id):
    # Get the doctor object, or return a 404 if not found
    doctor = get_object_or_404(Doctor, id=id)
    
    # Set the doctor as enabled
    doctor.is_enabled = True
    doctor.save()
    
    # Redirect back to the doctor list page
    return redirect('DoctorsList')  



# views for doctor work validation page 

def doctorInfo_page(request):
     # Get the optional date filter from the GET request
    date_filter = request.GET.get('date', None)
    
    # Initialize the filter condition
    date_filter_condition = Q()

    # If there's a date filter, create a condition for it
    if date_filter:
        try:
            # Convert the date string into a datetime object
            date_filter = datetime.strptime(date_filter, "%Y-%m-%d").date()
            date_filter_condition = Q(appointment__date=date_filter)
        except ValueError:
            # If the date format is incorrect, ignore the filter
            date_filter_condition = Q()

    # Aggregate the count of patients per doctor, using the filter condition
    doctor_patient_counts = Doctor.objects.annotate(
        patient_count=Count('appointment', filter=date_filter_condition)
    ).order_by('name')
    
    return render(request,'pages/DoctorInfo.html', {'doctor_patient_counts': doctor_patient_counts})




   
    


# Api for signup

@api_view(['POST'])
@permission_classes([AllowAny])  # Allow access to unauthenticated users
def patient_signup(request):
    """
    API endpoint for patient signup.
    """
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {"message": "Patient registered successfully."}, 
            status=status.HTTP_201_CREATED
        )
    return Response(
        {"errors": serializer.errors},
        status=status.HTTP_400_BAD_REQUEST
    )



#  Api for login 

@api_view(['POST'])
@permission_classes([AllowAny])  
def patient_login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    # Validate input
    if not email or not password:
        return Response(
            {"error": "Email and password are required."},
            status=status.HTTP_400_BAD_REQUEST
        )
    # Authenticate user
    user = authenticate(username=email, password=password)

    if user is not None:
        # Generate or get the token for the authenticated user
        token, created = Token.objects.get_or_create(user=user)

       
        return Response(
            {
                "message": "Login successful.",
                "token": token.key,
                "user": {
                    "id": user.id,
                    "name": user.name,
                    "email": user.email
                }
            },
            status=status.HTTP_200_OK
        )
    else:
        # Invalid credentials
        return Response(
            {"error": "Invalid email or password."},
            status=status.HTTP_401_UNAUTHORIZED
        )



#Api for book appointment


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def book_appointment(request):
    # Retrieve IDs from the request data
    department_id = request.data.get('department_id')  # Get department ID
    doctor_id = request.data.get('doctor_id')          # Get doctor ID
    appointment_date = request.data.get('date')        # Get appointment date

    # Validate the input
    if not department_id or not doctor_id or not appointment_date:
        return Response(
            {"error": "Department ID, doctor ID, and appointment date are required."},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        # Retrieve department and doctor by IDs
        department = Department.objects.get(id=department_id)
        doctor = Doctor.objects.get(id=doctor_id, department=department)
    except Department.DoesNotExist:
        return Response(
            {"error": "Department not found."},
            status=status.HTTP_404_NOT_FOUND
        )
    except Doctor.DoesNotExist:
        return Response(
            {"error": "Doctor not found in this department."},
            status=status.HTTP_404_NOT_FOUND
        )

    # Create the appointment
    appointment = Appointment.objects.create(
        department=department,
        doctor=doctor,
        date=appointment_date,
        user=request.user
    )

    # Serialize the created appointment
    serializer = AppointmentSerializer(appointment)

    return Response(
        {
            "message": "Appointment booked successfully.",
            "appointment": serializer.data
        },
        status=status.HTTP_201_CREATED
    )






#Api for Doctor list


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def doctor_list(request):
    # Fetch all enabled doctors and their related department
    doctors = Doctor.objects.filter(is_enabled=True).select_related('department')
    
    # Serialize the data manually, including the image URL
    data = []
    for doctor in doctors:
        doctor_data = {
            'id': doctor.id,
            'name': doctor.name,
            'department_name': doctor.department.name if doctor.department else None,
            'qualification': doctor.qualification,
            'experience': doctor.experience,
            'image': doctor.image.url if doctor.image else None,  # Use the image URL
        }
        data.append(doctor_data)
    
    return JsonResponse(data, safe=False)



# Api for user Profile 

@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Only authenticated users can view their profile
def get_user_profile(request):
    """
    API view to get the profile of the logged-in user.
    """
    user = request.user  # Get the currently logged-in user
    serializer = CustomUserProfileSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['PUT', 'PATCH'])
@permission_classes([IsAuthenticated])  # Only authenticated users can update their profile
def update_user_profile(request):
    """
    API view to update the profile of the logged-in user.
    """
    user = request.user  # Get the currently logged-in user

    serializer = CustomUserProfileSerializer(user, data=request.data, partial=True)
    
    if serializer.is_valid():
        # Save the updated profile
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# Api views for showing appointment data

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_appointments(request):
    user = request.user  # Get the authenticated user
    
    # Get today's date
    today = date.today()

    upcoming_appointments = Appointment.objects.filter(user=user, date__gte=today)
    
   
    past_appointments = Appointment.objects.filter(user=user, date__lt=today)
    
 
    upcoming_appointments_data = AppointmentSerializer(upcoming_appointments, many=True)
    past_appointments_data = AppointmentSerializer(past_appointments, many=True)

    # Return the response with both categories of appointments
    return Response({
        "upcoming_appointments": upcoming_appointments_data.data,
        "past_appointments": past_appointments_data.data
    })



# Bookappointment Api for getting data form show in the dropdown department and doctor by id 

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_departments(request):
    departments = Department.objects.all()
    serializer = DepartmentSerializer(departments, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_doctors(request):
    # Get department ID from query parameters
    department_id = request.query_params.get('department_id')

    # Validate department ID
    if not department_id:
        return Response({"error": "Department ID is required."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        # Filter doctors by department ID and ensure they are enabled
        doctors = Doctor.objects.filter(department_id=department_id, is_enabled=True)

        # Serialize the doctor data
        serializer = DoctorSSerializer(doctors, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except Exception as e:
        print(f"Error fetching doctors: {str(e)}")
        return Response({"error": "Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
