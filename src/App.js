import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // states for our data:
  let [cityData, setCityData] = useState({});
  let [weatherData, setWeatherData] = useState({});
  let [visaData, setVisaData] = useState({});

  // Function to show stuff when button clicked:
  let [apiLoaded, setApiLoaded] = useState(false);
  
  // Function to get geocoordinates for city name on click:
  const getCityCoordinates = function() {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=fab801f7e2e8bfaec7313b7ef6c6719a")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCityData(data);
      setApiLoaded(true);
    });
  };

  return (
    <div className="App">
      <h1>Sandbox API Test</h1>
      <h3>Click this button to get city geocoordinates</h3>
      <button onClick={getCityCoordinates}>Go!</button>
      {apiLoaded === true 
        ? <p>{cityData[0].name}</p> 
        : <p>Nothing to see yet.</p>
      }
    </div>
  );
}

export default App;
