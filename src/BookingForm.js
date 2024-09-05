import React from 'react';

const BookingForm = ({ formData = {}, availableTimes = [], onFormChange, onSubmit, dispatch }) => {
    const handleChange = (e) => {
        const { id, value } = e.target;

        console.log(`Field updated: ${id}, Value: ${value}`);

        onFormChange({
            ...formData,
            [id]: value,
        });

        if (id === 'date') {
            dispatch({ type: 'dateChange', date: value });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        

        <form onSubmit={handleFormSubmit}>
            <h1>Book Now</h1>
            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                value={formData.date || ''}
                onChange={handleChange}
            />

            <label htmlFor="time">Choose time</label>
            <select id="time" value={formData.time || ''} onChange={handleChange}>
                {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
                    availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))
                ) : (
                    <option value="" disabled>
                        No available times
                    </option>
                )}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                value={formData.guests || 1}
                min="1"
                max="10"
                onChange={handleChange}
            />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formData.occasion || 'Birthday'} onChange={handleChange}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button type="submit">Make Your Reservation</button>
        </form>
    );
};

export default BookingForm;
