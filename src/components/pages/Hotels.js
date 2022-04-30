import React, { useContext } from 'react';

import { MyContext } from '../../context/MyProvider';
import '../../App.css'

const Hotels = () => {
  const context = useContext(MyContext);

  return(
    <>
      {context.apiLoaded === true &&
          context.hotelData.map((element, index) => {
            return (
              <div className='hotel-container'>
                  
              {/* <video src='/videos/video-hotel.mp4' autoPlay loop muted /> */}
              <div className='hotel-text'>
              <h1></h1>
                <br />
            
              <div className="" key={index}>
                <p><b>Hotel name:</b> <i>{element.hotel_name} </i>
                </p>
                <div className='img'>
                <img  sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px" src={element.max_photo_url} alt={element.hotel_name} /></div>
                <p><b>Hotel address:</b> <i>{element.address}</i>
                </p>
                <p><b>Check-In from:</b> {element.checkin.from} h</p>
                <p><b>Check-Out from:</b> {element.checkout.until} h</p>
                <p>
                <b>Review:</b> <i>Score: {element.review_score}, Nr of reviews: {element.review_nr}</i></p>
                <p>
                <b>Link to book hotel:</b> <a href={element.url} target="_blank">Check more details at Booking.com</a></p>
                <p>
                <b>Best price:</b> <i>{element.price_breakdown.gross_price}, {element.price_breakdown.currency}</i></p>
              </div>
              </div>
              </div>
            )
          })
      }
    </>
  )
};

export default Hotels;