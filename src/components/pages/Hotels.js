import React, { useState } from 'react'
import '../../App.css';

// state for hotels and loaded


const Hotels = function() {
  let [hotelData, setHotelData] = useState({});
  let [apiLoaded, setApiLoaded] = useState(false);
   let [userDestination, setUserDestination] = useState("");

    // Function updating the state variable userDestination with the text the user types
 const handleInput = function(event) {
    setUserDestination(event.currentTarget.value)
  }

  // options for API fetch
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
      'X-RapidAPI-Key': 'a834fb092bmsh80a6438e56b9f2bp168aecjsnf90c2767f95c'
    }
  };
  
  // display when site loads, needs to be changed to button click eventually!
  const getHotels = function() {
  fetch('https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?longitude=-73.935242&latitude=40.73061&checkin_date=2022-09-30&locale=en-gb&filter_by_currency=AED&checkout_date=2022-10-01&room_number=1&units=metric&adults_number=2&order_by=popularity&include_adjacency=true&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_ages=5%2C0&children_number=2', options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(data.result[0].address)
      setHotelData(data);
      // setHotelData(.result[0].address);
      setApiLoaded(true);
    })
    .catch(err => console.error(err));
  };


  return (
    <div className='visa-container'>
      <video src='/videos/video-hotel.mp4' autoPlay loop muted />
      <div className='visa-text'>
        <br />
        <h1>Hotels</h1>
        {/* If API is not loaded, display Loading Hotels, else show list of addresses */}
      { apiLoaded === true 
      ? hotelData.result.map((element, index) => {
        return <p key={index}>{element.name}</p>
        })
      : <p></p>
      }
      <br />
         <h3>Where do you want to go?</h3>

         <br />
     {/* Input updates userDestination state every time the user types something */}
    <input type="text" value={userDestination} onChange={handleInput}></input>
      {/* Button click sends userDestination as argument to function getCityCoordinates for API call */}
      
      <br />
      <br />
      <h3>When do you want to go?</h3>
          <br />
          <input type="text" value={userDestination} onChange={handleInput}></input>
      <button buttonStyle='btn--outline'>
         <button onClick={() => getHotels(userDestination)}>
           Go!</button>
         </button>


         <br />
         <br />
         </div>
  </div>
  )
}

export default Hotels