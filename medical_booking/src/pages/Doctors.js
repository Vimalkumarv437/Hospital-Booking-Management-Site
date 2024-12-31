import React, { useState, useEffect } from 'react';
import '../css/Doctors.css';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 4;
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = 'http://localhost:8000'; // Your API base URL for images

  // Fetch doctors data from the API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8000/Doctorslist/', {
          headers: {
            Authorization: `Token ${localStorage.getItem('accessToken')}`, // Include token for authentication
          },
        });
        console.log('Fetched Doctors:', response.data); 
        setDoctors(response.data); // Set doctors data in state
        setFilteredDoctors(response.data); // Initialize filteredDoctors with full list
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setIsLoading(false); // Stop loading once data is fetched
      }
    };

    fetchDoctors();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Safely filter doctors by department name
    const filtered = doctors.filter((doctor) =>
      doctor.department_name && doctor.department_name.toLowerCase().includes(term)
    );

    setFilteredDoctors(filtered); // Update the filtered list
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Pagination logic
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />

      <div className="Doctor_title" style={{
        backgroundImage: 'url(/images/22.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="Doctor_text">
          <p style={{ color: 'white' }}>All Doctors</p>
          <h1 style={{ color: 'white', fontSize: '66px', fontWeight: '700' }}>Specialized Doctors</h1>
        </div>
      </div>

      <div className="heading_doctors">
        <h1 style={{ color: '#223a66', fontSize: '44px', fontWeight: 'bold' }}>Doctors</h1>
        <p style={{ color: '#6F8BA4' }}>
          We provide a wide range of creative services adipisicing elit. Autem maxime 
          <br />
          <span style={{ marginLeft: '90px' }}>rem modi eaque, voluptate. Beatae officiis neque</span>
        </p>
        <div className="Alldepartment">
          <h3>All Department</h3>
        </div>

        <div className="search_doctor">
          <input
            type="text"
            placeholder="Search Department"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Doctors List */}
      <div className="container-fluid mt-5">
        <div className="row">
          {/* Render Doctor Cards */}
          {currentDoctors.length > 0 ? (
            currentDoctors.map((doctor) => (
              <div className="col-md-3 mb-4" key={doctor.id}>
                <div className="card h-100">
                  {/* Display image, ensure full URL path */}
                  <img src={`${baseUrl}${doctor.image}`} className="card-img-top" alt={`${doctor.name}`} />
                  <div className="card-body">
                    <h5 className="card-title">{doctor.name}</h5>
                    <p className="card-text">
                      <strong>Department:</strong> {doctor.department_name} <br />
                      <strong>Qualification:</strong> {doctor.qualification || 'N/A'} <br />
                      <strong>Experience:</strong> {doctor.experience || '0'} years
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No doctors found for the selected department.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredDoctors.length > doctorsPerPage && (
          <nav>
            <ul className="pagination justify-content-center">
              {[...Array(totalPages).keys()].map((number) => (
                <li className={`page-item ${currentPage === number + 1 ? 'active' : ''}`} key={number}>
                  <button className="page-link" onClick={() => paginate(number + 1)}>
                    {number + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Doctors;
