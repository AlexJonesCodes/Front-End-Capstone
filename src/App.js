import React, { useEffect, useReducer, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import About from './About';
import './App.css';
import ConfirmBooking from './ConfirmedBooking';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Menu from './Menu';
import Nav from './Nav';
import Order from './Order';
import Reservation from './Reservation';
import { fetchAPI, submitAPI } from './api';

function App() {


  const submitForm = async (formData) => {
    const success = submitAPI(formData);
    if (success) {
      console.log('Form submitted successfully!');
    
    } else {
      console.log('Form submission failed.');
    }
  };


  const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0];
    const availableTimes = fetchAPI(new Date(today)); // Fetch available times for today
    console.log('Available times:', availableTimes); // Log the times
    return availableTimes;
  };

  const updateTimes = (state, action) => {
    switch(action.type) {
        case 'dateChange':
            const availableTimes = fetchAPI(new Date(action.date));
            console.log('Updated times after date change:', availableTimes); // Log this to ensure times are updated
            return availableTimes || [];
        case 'init':
            return action.times || [];
        default:
            return state;
    }
};

  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
  };

  const handleSubmit = async () => {
    const success = submitAPI(formData);
    if (success) {
      console.log('Form submitted successfully!');
      
    } else {
      console.log('Form submission failed.');
    }
  };

  useEffect(() => {
    (async () => {
        const times = await initializeTimes();
        console.log('Initialized times:', times);
        dispatch({ type: 'init', times: times || [] }); // Ensure times is an array
    })();
}, []);

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/reservation"
            element={
              <Reservation
                formData={formData}
                availableTimes={availableTimes}
                onFormChange={handleFormChange}
                onSubmit={handleSubmit}
                dispatch={dispatch}
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmBooking />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

