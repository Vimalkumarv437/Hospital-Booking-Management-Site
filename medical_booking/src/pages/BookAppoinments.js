import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/BookAppointments.css';

function BookAppointments() {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState(''); // Store doctor ID

  // Fetch departments when the component loads
  useEffect(() => {
    axios
      .get('http://localhost:8000/departments/', {
        headers: {
          Authorization: `Token ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((response) => setDepartments(response.data))
      .catch((error) => console.error('Error fetching departments:', error));
  }, []);

  // Fetch doctors whenever the selected department changes
  useEffect(() => {
    if (selectedDepartmentId) {
      axios
        .get(`http://localhost:8000/doctors/?department_id=${selectedDepartmentId}`, {
          headers: {
            Authorization: `Token ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((response) => setDoctors(response.data))
        .catch((error) => console.error('Error fetching doctors:', error));
    } else {
      setDoctors([]); // Clear doctors when no department is selected
    }
  }, [selectedDepartmentId]); // Dependency on selectedDepartmentId

  const handleDepartmentChange = (e) => {
    setSelectedDepartmentId(e.target.value); // Update department ID
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      department_id: selectedDepartmentId, // Use ID instead of name
      doctor_id: selectedDoctorId,         // Use ID instead of name
      date: appointmentDate,
    };

    axios
      .post('http://localhost:8000/book-appointment/', data, {
        headers: {
          Authorization: `Token ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(() => alert('Appointment booked successfully!'))
      .catch((error) => {
        console.error('Error booking appointment:', error);
        alert('Failed to book appointment. Please try again.');
      });
  };

  return (
    <div>
      <Navbar />
      <div
        className="Appointment_title"
        style={{
          backgroundImage: 'url(/images/22.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="Appointment_text">
          <p style={{ color: 'white' }}>Book Your Seat</p>
          <h1 style={{ color: 'white', fontSize: '66px', fontWeight: '700' }}>Appointment</h1>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <img src="images/bg-1.jpg" alt="img doctor" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <form className="border border-primary rounded p-4" onSubmit={handleSubmit}>
              <h2
                className="text-center"
                style={{ color: '#223a66', fontSize: '44px', fontWeight: '700' }}
              >
                Book an Appointment
              </h2>
              <p style={{ color: '#6F8BA4' }}>
                Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit <br />
                <span style={{ marginLeft: '100px' }}>
                  Iste dolorum atque similique praesentium soluta.
                </span>
              </p>
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <select
                  className="form-control"
                  id="department"
                  value={selectedDepartmentId}
                  onChange={handleDepartmentChange} // Handle department change
                >
                  <option value="">Select Department</option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="doctorName">Doctor's Name</label>
                <select
                  className="form-control"
                  id="doctorName"
                  value={selectedDoctorId}
                  onChange={(e) => setSelectedDoctorId(e.target.value)} // Handle doctor change
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="appointmentDate">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="appointmentDate"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-primary">
                  Make Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookAppointments;
