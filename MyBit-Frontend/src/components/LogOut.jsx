import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Logout.css'; // Import the CSS file

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('jwt');

    // Remove token from Authorization header
    delete axios.defaults.headers.common['Authorization'];

    // Redirect to login page
    navigate('/users/signin');
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogOut;
