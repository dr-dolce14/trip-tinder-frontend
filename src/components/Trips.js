import React from 'react'
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
        <div className='trips-photo'>
          <img alt='camping' src={trip1} />
        </div>
      </div>

      <div className='trips-photo-frame'>
        <div className='trips-photo'>
          <img alt='camping' src={trip2} />
        </div>
      </div>

      <div className='trips-photo-frame'>
        <div className='trips-photo'>
          <img alt='camping' src={trip3} />
        </div>
      </div>

      <div className='trips-photo-frame'>
        <div className='trips-photo'>
          <img alt='camping' src={trip4} />
        </div>
      </div>

      <div className='trips-photo-frame'>
        <div class='trips-photo'>
          <img alt='camping' src={trip5} />
        </div>
      </div>

      <div className='trips-photo-frame'>
        <div className='trips-photo'>
          <img alt='camping' src={trip6} />
        </div>
      </div>
      <div className='row'></div>
    </div>
  );
}

export default Trips