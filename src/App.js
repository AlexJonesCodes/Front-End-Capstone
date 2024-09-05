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
  return (
    <Router>
      <div>
        <Nav />
        
        <Routes>
          
          <Route path="/" element={<Home />} />

          
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
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
