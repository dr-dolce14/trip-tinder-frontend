import React from 'react';

const TripItem = (props) => {
  return (
    <div>
      <div>name: {props.trip.name}</div>
      <div>trip lead: {props.trip.trip_lead.first_name}</div>
      <div>description: {props.trip.description}</div>
    </div>
  );
}

export default TripItem;