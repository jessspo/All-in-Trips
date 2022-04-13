// // import React, {useState} from 'react';

// function Api() {
//     // states for our data:
//     let [cityData, setCityData] = useState({});
//     let [weatherData, setWeatherData] = useState({});
//     let [visaData, setVisaData] = useState({});
//     let [userDestination, setUserDestination] = useState("");
  
//     // Function updating the state variable userDestination with the text the user types
//     const handleInput = function(event) {
//       setUserDestination(event.currentTarget.value)
//     }
  
//     // Function to display results of API request when the button was clicked:
//     let [apiLoaded, setApiLoaded] = useState(false);
    
//     // Function to get API results for the city from the text input, on button click:
//     const getCityCoordinates = function(input) {
//       fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=3&appid=fab801f7e2e8bfaec7313b7ef6c6719a`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setCityData(data);
//         setApiLoaded(true);
//         // emptying the input field by resetting the state variable after getting the API results
//         setUserDestination("");
//       });
//     }
  
// //     return (
//       <div className="App">
//         <h1>Sandbox API Test</h1>
//         <h3>Give us a city name and click this button to get the city geo-coordinates</h3>
//         {/* Input updates userDestination state every time the user types something */}
//         <input type="text" value={userDestination} onChange={handleInput}></input>
//         {/* Button click sends userDestination as argument to function getCityCoordinates for API call */}
//         <button onClick={() => getCityCoordinates(userDestination)}>Go!</button>
//         {/* Displaying API results only if user searched at least once */}
//         {apiLoaded === true 
//           ? <p>Name: {cityData[0].name} // Lat: {cityData[0].lat} // Long: {cityData[0].lon}</p> 
//           : <p>You did not search for anything yet.</p>
//         }
//       </div>
//     );
//   }


// //   export default Api;