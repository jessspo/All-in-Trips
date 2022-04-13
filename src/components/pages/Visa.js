import React from 'react';
import '../../App.css';

export default function Visa() {

  return (
  <div className='visa-container'>
    <video src='/videos/video-visa.mp4' autoPlay loop muted />
    <div className='visa-text'>
    <br />
   <h1>Visa Requirements</h1>
   <h3><i>All you need to know regarding legal documents</i></h3>
   <br />
   <br />

   <h3>Where are you from?</h3>
   <button></button>
   <br />
   <br />

   <h3>Which city do you want to travel to?</h3>
   <button></button>
   <br />
   <br />

      {/* Input updates userDestination state every time the user types something */}
      {/* <input type="text" value={} onChange={handleInput}></input> */}


      {/* Button click sends userDestination as argument to function getCityCoordinates for API call */}
      {/* <button buttonStyle='btn--outline'> */}
      {/* <button onClick={() => ()}> */}
        {/* <p>Go!</p></button> */}


      {/* </button> */}
    </div>
  </div>
  )};
