import React from 'react';
import './App.css';

function Nav() {
  return (
    <nav className="nav-grid">
      <div className="nav-container">
        <img src="https://rhas92.github.io/Littlelemon/images/Logofooter1.png" alt="Little Lemon logo" />
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservation">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;