import React from 'react';

const TripItem = (props) => {
  return (
    <div className="park-card">
    <div className='row'>
      <div className='col span-1-of-4'>
        <h3>Trip Name:</h3>
      </div>

      <div className='col span-3-of-4'>
        {props.trip.name}
      </div>
    </div>

    <div className="row">
      <div className='col span-1-of-4'>
        <h3>Trip Lead:</h3>
      </div>

      <div className='col span-3-of-4'>
        {props.trip.trip_lead.first_name}
      </div>
    </div>

    <div className="row">
      <div className='col span-1-of-4'>
        <h3>Description:</h3>
      </div>
      <div className="col span-3-of-4">
        {props.trip.description}
      </div>
    </div>
    </div>


  );
}

export default TripItem;