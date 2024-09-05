import React from 'react';
import './App.css';

function reservation() {
return (
        
    <>
    <div className="Reservation-Page">
        <h1>Little Lemon</h1>
        <h2>Chicago Reservation</h2>
        
        <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />

        <div>
            <label>
                <input type="radio" name="guests" value="1" />
                1
            </label>
            <label>
                <input type="radio" name="guests" value="2" />
                2
            </label>
            <label>
                <input type="radio" name="guests" value="3" />
                3
            </label>
            <label>
                <input type="radio" name="guests" value="4" />
                4
            </label>
            <label>
                <input type="radio" name="guests" value="5" />
                5
            </label>
            <label>
                <input type="radio" name="guests" value="6" />
                6
            </label>
            <label>
                <input type="radio" name="guests" value="7" />
                7
            </label>
            <label>
                <input type="radio" name="guests" value="8" />
                8
            </label>
        </div>
        </form>

        <button>Reserve a Table</button>
    </div>
    </>
);
}

export default reservation;