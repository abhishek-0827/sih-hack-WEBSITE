// components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">
          <img src='./images/logo.jpg' alt="Logo" />
        </div>
        <div className="title">
          <h1>National Disaster Response Service</h1>
          <p>Ministry of Home Affairs, Govt. of Your Country</p>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
