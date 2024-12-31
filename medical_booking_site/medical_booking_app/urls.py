from django.urls import path
from . import views 
from .views import get_user_profile, update_user_profile
from .views import get_departments, get_doctors
from .views import book_appointment

urlpatterns = [
    path('',views.login_page),
      path('Appointment/',views.Appoinment_page,name='Appointment'),
     





      path('ListOfUsers',views.ListOfUsers_page,name='ListOfUsers'),
      path('ViewsForUsers/<int:id>/view/',views.listuserView_page,name='ViewsForUsers'),
       path('Historypage/<int:id>/history/',views.History_page,name= 'History'),

      path('DoctorsList',views.doctorlist_page,name='DoctorsList'),

      path('CreateDoctor',views.Createdoctor_page,name='CreateDoctor'),

      path('DoctorDetails/<int:id>/details/',views.DoctorDetails_page,name= 'Doctordetails'),
      
      path('Editingdoctor profile/<int:id>/edit/',views.EditingDoctor_page,name= 'Editdoctor'),
      path('doctor/<int:id>/disable/', views.disable_doctor, name='DisableDoctor'),
      path('doctor/<int:id>/enable/', views.enable_doctor, name='EnableDoctor'),

      path('DoctorInfo',views.doctorInfo_page,name= 'Doctorinfo'),
     






# path for Api views 
    
 path('patient-signup/', views.patient_signup, name='patient-signup'),
    path('patient-login/', views.patient_login, name='patient-login'),
   path('book-appointment/', book_appointment, name='book-appointment'),
    path('departments/', get_departments, name='get_departments'),
    path('doctors/', get_doctors, name='get_doctors'),
    path('Doctorslist/', views.doctor_list, name='doctor_list'),
     path('profile/', get_user_profile, name='get_user_profile'),  
    path('profile/update/', update_user_profile, name='update_user_profile'), 
    path('appointments/', views.user_appointments, name='user_appointments'),
 
     
]