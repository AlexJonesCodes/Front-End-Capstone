import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function About() {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/reservation');
  };

  return (
    <header className="header-grid">
      <div className="header-container-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>This is the Chicago location - yada yada yada</p>
        <p>Have to fill in some space here with the lorem ipsum dolor sit amet etc etc</p>
        <button onClick={handleReserveClick}>Reserve a Table</button>
      </div>
      <div className="header-container-right">
        <img src="https://rhas92.github.io/Littlelemon/images/Logofooter1.png" alt="Little Lemon logo" />
      </div>
    </header>
  );
}

export default About;