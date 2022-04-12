import React from 'react';
import Navbar from './components/Navbar';
// import Api from '.'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import './App.css';
import Home from './components/pages/Home';
import Weather from './components/pages/Weather';
import Flights from './components/pages/Flights';
import Visa from './components/pages/Visa';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/flights' element={<Flights/>} />
          <Route path='/weather' element={<Weather/>} />
          <Route path='/visa' element={<Visa/>} />
          {/* <Route path='/sign-up' element={<Sign-Up/>} /> */}
        </Routes>
      </Router>

    </>
  );
}
export default App;
