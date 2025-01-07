import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Navigates to the Home route
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
        <img src="/img/img1.png" alt="Logo" className="logo-img" />
        <img src="/img/img2.png" alt="Logo" className="logoo" />
      </div>
      <ul className="nav-links">
        <li className="nav-item" onClick={handleHomeClick}><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#bookdemo">Book a Demo</a></li>
        <li className="nav-item"><a href="#about">Why Zlanze?</a></li>
        <li className="nav-item"><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;