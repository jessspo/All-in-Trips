import React , { useContext } from 'react';
import '../../App.css';
import { localTime } from '../../functions/TimestampFunctions';

import { MyContext } from '../../context/MyProvider';



const FlightStart = () => {
    const context = useContext(MyContext); 


  return (
      
      <div className='flights-container'>
         <video src='/videos/video-flights.mp4' autoPlay loop muted />
         <div className='flights-text'>
          <br />
          <h1>Flights</h1>
          <br />

          <h3>Where are you travelling from?</h3>
          <button onClick={("")}></button>
          <br />
          <br />


          <h3>Where do you want to travel to?</h3>
          <button></button>
          <br />
          <br />

          <h3>When do you want to go?</h3>
          <button onClick={("")}></button>
          <br />
          <br />
         </div>
         
      </div>

  );
}

export default FlightStart;