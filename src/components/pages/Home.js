import React from 'react';
import '../../App.css';
import LandingPage from '../LandingPage';
import Cards from '../Cards';
import Question from '../../Question';
// import Footer from '../Footer';

function Home() {
  return (
    <>


      <LandingPage />
      <Question />
      <Cards />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
