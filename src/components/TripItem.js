import React from "react";

const TripItem = (props) => {
  const joinTripHandler = () => {
    console.log(props)
    fetch(`http://localhost:3001/api/v1/trips/${props.trip.id}`, {
      method: 'PATCH', 
      headers: {
        'accepts': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({username: props.user.username, trip_id: props.trip.id})
    })
    .then(resp=> resp.json())
    .then(data=> console.log(data))
  }
  return (
    <div className='trip-card'>
      <div className='row'>
        <div className='col span-1-of-3'>
          <h3>Trip Name:</h3>
        </div>

        <div className='col span-2-of-3'>{props.trip.name}</div>
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

        <div className='col span-2-of-3'>{props.trip.description}</div>
      </div>
      <div className="row">
        <input id="inline-btn" type="button" onClick={()=> console.log(props.trip)} className='btn btn-full' value="Save Trip"/>
        <input id="inline-btn" type="button" onClick={()=> joinTripHandler()} className='btn btn-full' value="Join Trip"/>
      </div>
    </div>
  );
};

export default TripItem;
