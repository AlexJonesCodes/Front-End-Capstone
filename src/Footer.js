import React from 'react';
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
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservation">Reservations</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
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