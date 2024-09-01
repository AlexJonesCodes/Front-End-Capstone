import React from 'react';

function Nav() {
return (
<nav>
    <img src="logo.jpg" alt="Little Lemon logo" />
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservation">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
    </ul>
</nav>
);
}

export default Nav;