import React from 'react'
import { NavLink } from "react-router-dom";
import trip1 from '../resources/img/trip-1.jpg'
import trip2 from '../resources/img/trip-2.jpg'
import trip3 from '../resources/img/trip-3.jpg'
import trip4 from '../resources/img/trip-4.jpg'
import trip5 from '../resources/img/trip-5.jpg'
import trip6 from '../resources/img/trip-6.jpg'

const Trips = () => {
  return (
      <div className='trips-card'>

        <div className='trips-photo-frame'>
          <div class='trips-photo'>
            <img src={trip1} />
          </div>
        </div>

        <div className='trips-photo-frame'>
          <div class='trips-photo'>
            <img src={trip2} />
          </div>
        </div>

        <div className='trips-photo-frame'>
          <div class='trips-photo'>
            <img src={trip3} />
          </div>
        </div>

        <div className='trips-photo-frame'>
          <div class='trips-photo'>
            <img src={trip4} />
          </div>
        </div>

        <div className='trips-photo-frame'>
          <div class='trips-photo'>
            <img src={trip5} />
          </div>
        </div>

        <div className='trips-photo-frame'>
          <div class='trips-photo'>
            <img src={trip6} />
          </div>
        </div>
        <div className='row'></div>
      </div>
  );
}

export default Trips