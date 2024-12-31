import React, { useState } from 'react';
import axios from 'axios';
import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/patient-login/',
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Save the token with the correct key
      localStorage.setItem('accessToken', response.data.token); // Storing with 'accessToken' to match the profile page
      setMessage('Login successful!');
      navigate('/'); 
    } catch (error) {
      if (!navigator.onLine) {
        setError('You are offline. Please check your internet connection.');
      } else if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container my-5">
        <form
          className="border border-primary rounded p-4 mx-auto"
          style={{ maxWidth: '500px', backgroundColor: '#C5C5C5' }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-primary mb-4" style={{ fontSize: '2rem' }}>Login</h2>

          {message && <p className="text-center text-success">{message}</p>}
          {error && <p className="text-center text-danger">{error}</p>}

          <div className="form-group">
            <input
              type="email"
              className="form-control text-center"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control text-center"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary w-100 w-md-50" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <p className="text-center">
              Don't have an account? <Link to="/signup" className="text-primary">Register Here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
