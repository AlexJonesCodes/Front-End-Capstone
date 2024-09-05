import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

function ConfirmBooking() {
    const location = useLocation();
    const formData = location.state;

    if (!formData) {
        return <div>No reservation information available.</div>;
    }

    return (
        <div className="booking-confirmed">
            <h1>Booking Confirmed!</h1>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Number of guests:</strong> {formData.guests}</p>
            <p><strong>Occasion:</strong> {formData.occasion}</p>
        </div>
    );
}

export default ConfirmBooking;
