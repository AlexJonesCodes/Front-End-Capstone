import React from 'react';
import BookingForm from './BookingForm';

function Reservation({ formData, availableTimes, onFormChange, onSubmit, dispatch }) {
  return (
    <div className="Reservation-Page">
      <h1>Little Lemon</h1>
      
      <div className="Reservation-Page-Text">
        <BookingForm
          formData={formData}
          availableTimes={availableTimes}
          onFormChange={onFormChange}
          onSubmit={onSubmit}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

export default Reservation;
