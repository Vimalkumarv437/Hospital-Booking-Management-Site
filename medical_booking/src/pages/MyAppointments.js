import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import '../css/MyAppointment.css';

function MyAppointments() {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch appointments data
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8000/appointments/', {
          headers: {
            Authorization: `Token ${localStorage.getItem('accessToken')}`,
          },
        });

        setUpcomingAppointments(response.data.upcoming_appointments);
        setPastAppointments(response.data.past_appointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />

      <div className='Myappintment_title' style={{
        backgroundImage: 'url(/images/22.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className='Myappintment_text'>
          <p style={{ color: 'white' }}>My Appointment</p>
          <h1 style={{ color: 'white', fontSize: '66px', fontWeight: '700' }}>My Appointments</h1>
        </div>
      </div>

      <div className='text-center'>
        <h1 style={{ fontSize: '45px', color: '#223a66', fontWeight: '700' }}>Upcoming Appointments</h1>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment) => {
              const doctorImage = appointment.image ? `http://localhost:8000${appointment.image}` : '/media/default-image.jpg'; // Full URL to the image
              return (
                <div className="col-md-3 mb-4" key={appointment.id}>
                  <div className="card h-100">
                    <img src={doctorImage} className="card-img-top" alt={appointment.doctor_name} />
                    <div className="card-body">
                      <h5 className="card-title">{appointment.doctor_name}</h5>
                      <p className="card-text">
                        <strong>Department:</strong> {appointment.department_name} <br />
                        <strong>Qualification:</strong> {appointment.qualification} <br />
                      </p>
                      <p><strong>Date:</strong> {appointment.date}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No upcoming appointments.</p>
          )}
        </div>
      </div>

      <div className='text-center'>
        <h1 style={{ fontSize: '45px', color: '#223a66', fontWeight: '700' }}>History of Appointments</h1>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          {pastAppointments.length > 0 ? (
            pastAppointments.map((appointment) => {
              const doctorImage = appointment.image ? `http://localhost:8000${appointment.image}` : '/media/default-image.jpg'; // Full URL to the image
              return (
                <div className="col-md-3 mb-4" key={appointment.id}>
                  <div className="card h-100">
                    <img src={doctorImage} className="card-img-top" alt={appointment.doctor_name} />
                    <div className="card-body">
                      <h5 className="card-title">{appointment.doctor_name}</h5>
                      <p className="card-text">
                        <strong>Department:</strong> {appointment.department_name} <br />
                        <strong>Qualification:</strong> {appointment.qualification} <br />
                      </p>
                      <p><strong>Date:</strong> {appointment.date}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No past appointments.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MyAppointments;
