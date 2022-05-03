import React from 'react';
import '../App.css';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className='landing-container'>
      {/* <video src='/videos/video-landing.mp4' autoPlay loop muted /> */}
      
      <img className="img-landing" src='/images/img-landing.png' />
      <h1>TRAVEL MODE</h1>
      <p>fill in below to check flights, hotels and weather</p>
  

    </div>
  );
}

export default LandingPage;

