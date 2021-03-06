import React from "react";
import { NavLink } from 'react-router-dom'

const TripItem = (props) => {

  const joinTripHandler = async () => {
    console.log('hi')
    await fetch(`http://localhost:3001/api/v1/trips/${props.trip.id}`, {
      method: 'PATCH', 
      headers: {
        'accepts': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({username: props.user.username, trip_id: props.trip.id})
    })
    .then(resp=> console.log(resp.json()))
    .then(alert("You have joined this trip"))
  
}

const tripShowClickHandler = () => {
  props.tripShowClickHandler(props.trip)
}

  return (
    <div className='trip-card'>
      <div className='row'>
        <div className='col span-1-of-3'>
          <h3>Trip Name:</h3>
        </div>
        <NavLink to={`/trips/${props.trip.id}`}>
        <div className='col span-2-of-3' onClick={tripShowClickHandler}>{props.trip.name}</div>
        </NavLink>
      </div>

      <div className='row'>
        <div className='col span-1-of-3'>
          <h3>Trip Lead:</h3>
        </div>

        <div className='col span-2-of-3'>{props.trip.trip_lead.first_name}</div>
      </div>

      <div className='row'>
        <div className='col span-1-of-3'>
          <h3>Description:</h3>
        </div>

        <div className='col span-2-of-3'><p>{props.trip.description}</p></div>
      </div>
      <div className="row">
        <input id="inline-btn" type="submit" onClick={joinTripHandler} className='btn btn-full' value="Join Trip"/>
      </div>
    </div>
  );
};

export default TripItem;
