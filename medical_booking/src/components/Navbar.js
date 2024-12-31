import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(!!token); // Update authentication state
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/'); // Redirect to home after logout
  };

  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid">
            {/* Logo */}
            <NavLink className="navbar-brand" to="/">
              <img src="images/logo.png" alt="Logo" style={{ height: '40px' }} />
            </NavLink>

            {/* Mobile Menu Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                {/* Common Links */}
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    to="/"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    to="/Aboutus"
                  >
                    ABOUT US
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    to="/services"
                  >
                    SERVICES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    to="/doctorsList"
                  >
                    DOCTORS
                  </NavLink>
                </li>

                {/* Links for Authenticated Users */}
                {isAuthenticated && (
                  <>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        to="/BookAppoinments"
                      >
                        BOOK APPOINTMENT
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        to="/MyProfile"
                      >
                        PROFILE
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        to="/MyAppointments"
                      >
                        MY APPOINTMENT
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <button
                        className="btn btn-link nav-link dropdown-toggle"
                        id="navbarDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        ACCOUNT
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <button className="dropdown-item" onClick={handleLogout}>
                            LOGOUT
                          </button>
                        </li>
                      </ul>
                    </li>
                  </>
                )}

                {/* Links for Unauthenticated Users */}
                {!isAuthenticated && (
                  <>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        to="/Signup"
                      >
                        REGISTER
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        to="/login"
                      >
                        LOGIN
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <hr />
      </div>
    </div>
  );
}

export default Navbar;
