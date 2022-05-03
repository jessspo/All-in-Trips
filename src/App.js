import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import './App.css';
import Home from './components/pages/Home';
import WeatherStart from './components/pages/WeatherStart';
import FlightStart from './components/pages/FlightStart';
import HotelStart from './components/pages/HotelStart';

function App() {




  
  return (
    
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/flights' element={<FlightStart/>} />
          <Route path='/weather' element={<WeatherStart/>} />
          <Route path='/hotels' element={<HotelStart/>} />
        </Routes>
      </Router>
    </> 
  );
}

export default App;
