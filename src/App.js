import React, { useReducer, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Menu from './Menu';
import Nav from './Nav';
import Order from './Order';
import Reservation from './Reservation';

function App() {
  const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const updateTimes = (state, action) => {
    if (action.type === 'dateChange') {
      return initializeTimes();
    }
    return state;
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

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
