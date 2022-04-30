import React from 'react';
import '../App.css';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className='landing-container'>
      <video src='/videos/video-landing.mp4' autoPlay loop muted />
      <h1>TRAVEL MODE</h1>
      <p>tell us where do you wanna go we tell you how it is</p>
      

    </div>
  );
}

export default LandingPage;

