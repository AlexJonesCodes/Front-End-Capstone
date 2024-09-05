import React from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from './api';
import './App.css';
import BookingForm from './BookingForm';

function Reservation({ formData, availableTimes, onFormChange, onSubmit, dispatch }) {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      console.log('Form submitted successfully!');
      navigate('/confirmed', { state: formData });
    } else {
      console.log('Form submission failed.');
    }
  };

  return (
    <div className="Reservation-Page">
      <h1>Little Lemon</h1>
      <div className="Reservation-Page-Text">
        <BookingForm
          formData={formData}
          availableTimes={availableTimes}
          onFormChange={onFormChange}
          onSubmit={submitForm}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

export default Reservation;
