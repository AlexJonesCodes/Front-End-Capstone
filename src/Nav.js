import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav() {
  return (
    <nav className="nav-grid">
      <div className="nav-container">
        <img src="https://rhas92.github.io/Littlelemon/images/Logofooter1.png" alt="Little Lemon logo" />
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservation">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;