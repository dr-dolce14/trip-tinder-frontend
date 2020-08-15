import React, { useState } from "react";
import SearchTrips from '../components/SearchTrips'
import { Route, Redirect } from 'react-router-dom'
import CreateTripsForm from '../components/CreateTripsForm'
import Trip from '../components/Trip'

class TripsContainer extends React.Component {

  renderTrips = (tripsArray) => {
    return tripsArray.map((trip) => <Trip key={trip.id} trip={trip}/>)
  }
  
  render() {
    return (
      <section>
        <div>{this.renderTrips(this.props.trips)}</div>
      </section>
    );
  }
}

export default TripsContainer;
