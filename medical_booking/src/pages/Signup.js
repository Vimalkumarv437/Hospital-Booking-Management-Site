import React, { useState } from 'react';
import axios from 'axios';
import '../css/Signup.css';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
  });

  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }
  
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/patient-signup/',
        {
          name: formData.name,
          age: formData.age,
          gender: formData.gender,
          contact_number: formData.contact,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirmPassword,
          address: formData.address,
        },
        {
          headers: {
            'Content-Type': 'application/json', 
          },
        }
      );
      
      setMessage(response.data.message);
      setErrors(null);

      // Navigate to the login page after successful signup
      setTimeout(() => {
        navigate('/login');  // Redirect to login page
      }, 2000);  // Wait for 2 seconds before navigating

    } catch (error) {
      setMessage('');
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setMessage('An error occurred while signing up.');
      }
    }
  };

  return (
    <div>
      <div className="container my-5">
        <form
          className="border border-secondary p-4 rounded"
          style={{ backgroundColor: '#C5C5C5' }}
          onSubmit={handleSubmit}
        >
          <h2 className="mb-5 text-center text-primary" style={{ fontSize: '4rem' }}>Register</h2>
          {message && <p className="text-center text-danger">{message}</p>}
          {errors && (
            <ul className="text-danger">
              {Object.keys(errors).map((key) => (
                <li key={key}>{`${key}: ${errors[key].join(', ')}`}</li>
              ))}
            </ul>
          )}
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">NAME</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="age" className="form-label">AGE</label>
              <input type="number" className="form-control" id="age" placeholder="Enter your age" value={formData.age} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="gender" className="form-label">GENDER</label>
              <select className="form-control" id="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="contact" className="form-label">CONTACT NUMBER</label>
              <input type="tel" className="form-control" id="contact" placeholder="Enter your contact number" value={formData.contact} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">EMAIL</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">PASSWORD</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">CONFIRM PASSWORD</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">ADDRESS</label>
            <textarea className="form-control" id="address" rows="3" placeholder="Enter your address" value={formData.address} onChange={handleChange}></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-50">Register</button>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <p>Already have an account? <Link to="/login">Login Here</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
