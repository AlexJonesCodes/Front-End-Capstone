import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Footer() {
return (
    <footer>
        <div className="footer-container">
        <div className="footer-logo">
            <img src="https://rhas92.github.io/Littlelemon/images/Logofooter1.png" alt="Little Lemon logo" />
        </div>
        <div className="footer-nav-container">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
            </ul>
        </div>

        <div className="footer-contact">
            <h2>Contact Us</h2>
            <p>123-456-7890</p>
            <p>littlelemon@meta.com</p>
        </div>

        <div className="footer-social">
            <h2>Follow Us</h2>
            <ul>
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.twitter.com">Twitter</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>
        </div>
        </div>
        
        

        <p>&copy; 2024 Little Lemon</p>
    </footer>
);
}

export default Footer;