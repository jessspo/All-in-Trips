import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import { MyContext } from './context/MyProvider';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Question from './Question';
import WeatherStart from './components/pages/WeatherStart';
import AboutUs from './components/pages/AboutUs';
import Flights from './components/pages/Flights';
import Hotels from './components/pages/Hotels';

function App() {
  const context = useContext(MyContext);

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/question' exact element={<Question/>} />
          <Route path='/weather' element={<WeatherStart/>} />
          <Route 
            path='/flights' 
            element={context.apiLoaded ? <Flights /> : <Question/>} 
          />
          <Route 
            path='/hotels' 
            element={context.apiLoaded ? <Hotels /> : <Question/>} 
          />
          <Route path='/about-us' element={<AboutUs/>} />
        </Routes>
      </Router>
  );
}

export default App;
