import React from 'react';
import '../App.css';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <header className='landing-container'>
      <img className="img-landing" src='/images/img-landing.png' alt="picture of a travel map" />
      <h1>TRAVEL MODE</h1>
      <p className='subtext'>fill in the form below to find the best flights, hotels and weather</p>
    </header>
  );
}

export default LandingPage;
