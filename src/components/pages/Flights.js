import React from 'react';
import '../../App.css';

function Flights() {
  return (
      <div className='flights-container'>
         <video src='/videos/video-flights.mp4' autoPlay loop muted />
         <div className='flights-text'>
          <br />
          <h1>Flights</h1>
          <br />

          <h3>Where are you travelling from?</h3>
          <button></button>
          <br />
          <br />
          <h3>Where do you want to travel to?</h3>
          <button></button>
          <br />
          <br />
         </div>
      </div>

  );
}

export default Flights;