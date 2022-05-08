import React, { useState } from 'react';
import { getWeather } from '../../functions/ApiFunctions';
import '../../App.css';
import { timeConverter } from '../../functions/TimestampFunctions';

const WeatherStart = () => {
  // states for our data:
 let [cityData, setCityData] = useState({});
 let [weatherData, setWeatherData] = useState({});
 let [userDestination, setUserDestination] = useState("");
 let [apiLoaded, setApiLoaded] = useState(false);

 // Function updating the state variable userDestination with the text the user types
 const handleInput = function(event) {
   setUserDestination(event.currentTarget.value)
 }
 
 // Function to get API results for the city from the text input, on button click:
 const getCityCoordinates = function(input) {
   // first get geo-coordinates from Geocoding API according to user input
   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=fab801f7e2e8bfaec7313b7ef6c6719a`)
   .then((response) => response.json())
   .then((coords) => {
     setCityData(coords);
     // second get weather for today and next 7 days from OpenWeather API
      getWeather(coords)
     .then((weatherData) => {
         setWeatherData(weatherData);
         setApiLoaded(true);
     });
   });
   // emptying the input field by reseting the state variable after getting the API results
   setUserDestination("");
 }

  return (
    <div className='weather-container'>
      <img className="img-landing" src='/images/img-weather2.png' autoPlay loop muted />
      <div className='weather-text'>
        <br />
        <br />
        <h1>Weather</h1>
        <br />
        <h3>Which city do you want to travel to?</h3>
        <br />
        {/* Input updates userDestination state every time the user types something */}
        <input type="text" value={userDestination} onChange={handleInput}></input>
        {/* Button click sends userDestination as argument to function getCityCoordinates for API calls */}
        <button buttonStyle='btn--outline'>
        <button onClick={() => getCityCoordinates(userDestination)}><p>Go!</p></button>
        </button>
        <br />
        <br />
        {/* Displaying API results only if user searched at least once */}
        {apiLoaded === true &&
          <>
            <p><b>City:</b> <i>{cityData[0].name} </i>
            </p>
            <p><b>Sky:</b> <i>{weatherData.current.weather[0].main}</i>
            </p>
            <p>
            <b>Temperature:</b> <i>{weatherData.current.temp}°</i></p>
            <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`}
            alt={weatherData.current.weather[0].description}/>
            {/* Mapping over array with weather forecast */}
            <h1>Forecast</h1>
            {weatherData.daily.map((element, index) => 
            <div key={index}>
            <p> {timeConverter(element.dt)} 
            <p> Temp: <i>{element.temp.day}°</i> | Min: <i>{element.temp.min}°</i> | Max: <i>{element.temp.max}°</i></p></p>
            <p>Sky: <i>{element.weather[0].main}</i>
            </p>
            <img src={`http://openweathermap.org/img/wn/${element.weather[0].icon}.png`} />
            </div>
            )}
          </>
        }
      </div>
    </div>
  )
};

export default WeatherStart;
