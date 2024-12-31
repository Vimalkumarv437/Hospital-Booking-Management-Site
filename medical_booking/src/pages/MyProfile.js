import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import '../css/MyProfile.css';

function MyProfile() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    contact_number: '',
    address: '',
    image: '',
  });

  const [profileImage, setProfileImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  // Fetch user profile on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/profile/', {
          headers: {
            Authorization: `Token ${localStorage.getItem('accessToken')}`,
          },
        });

        setProfileData(response.data);
        // If the backend returns a relative path, prepend the base URL
        const imageUrl = response.data.image ? `http://localhost:8000${response.data.image}` : null;
        setProfileImage(imageUrl);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle profile image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Update preview
      };
      reader.readAsDataURL(file);

      // Set file for submission
      setProfileData((prevData) => ({ ...prevData, image: file })); // Ensure 'image' is used here
    }
  };

  // Handle profile update
  const handleUpdateProfile = async () => {
    setIsUpdating(true);

    // Prepare data for FormData object
    const formData = new FormData();
    Object.keys(profileData).forEach((key) => {
      if (profileData[key]) {
        formData.append(key, profileData[key]); // Append both text and file data
      }
    });

    try {
      const response = await axios.put('http://localhost:8000/profile/update/', formData, {
        headers: {
          Authorization: `Token ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'multipart/form-data', // Set correct content type for file uploads
        },
      });

      setProfileData(response.data);
      // Ensure the profile image is updated properly
      const updatedImageUrl = response.data.image ? `http://localhost:8000${response.data.image}` : null;
      setProfileImage(updatedImageUrl); // Update image field on success
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div
        className="Profile_title"
        style={{
          backgroundImage: 'url(/images/22.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="Profile_text">
          <p style={{ color: 'white' }}>User profile</p>
          <h1 style={{ color: 'white', fontSize: '66px', fontWeight: '700' }}>Profile</h1>
        </div>
      </div>

      <div className="container mt-3 d-flex justify-content-center">
        <div className="card shadow-lg p-4 w-75 justify-content-center" style={{ borderRadius: '15px' }}>
          <div className="text-center mb-4">
            <label htmlFor="profileImageInput" style={{ cursor: 'pointer' }}>
              <img
                src={profileImage || '/images/2.jpg'} // Default image if no profile image
                alt="Profile"
                className="rounded-circle"
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  border: '2px solid #ddd',
                }}
              />
            </label>
            <input
              id="profileImageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>

          <div className="mt-4">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={profileData.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                className="form-control"
                name="gender"
                value={profileData.gender}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input
                type="text"
                className="form-control"
                name="contact_number"
                value={profileData.contact_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-primary"
              onClick={handleUpdateProfile}
              disabled={isUpdating}
            >
              {isUpdating ? 'Updating...' : 'Update Profile'}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MyProfile;
