import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Question from './Question';
import WeatherStart from './components/pages/WeatherStart';
import AboutUs from './components/pages/AboutUs';

function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/question' exact element={<Question/>} />
          <Route path='/weather' element={<WeatherStart/>} />
          <Route path='/about-us' element={<AboutUs/>} />
        </Routes>
      </Router>
  );
}

export default App;
