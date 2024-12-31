import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import BookAppoinments from './pages/BookAppoinments';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';




function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/doctorsList" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/BookAppoinments" element={<BookAppoinments />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Myprofile" element={<MyProfile />} />
        <Route path="/MyAppointments" element={<MyAppointments />} />
      </Routes>
    </Router>
  );
}

export default App;
