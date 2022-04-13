import React from 'react';
import '../../App.css';

function Flights() {
  return (
      <div className='flights-container'>
         <video src='/videos/video-flights.mp4' autoPlay loop muted />
         <div className='flights-text'>
         
          <h1>Flights</h1>
         </div>
      </div>

  );
}

export default Flights;