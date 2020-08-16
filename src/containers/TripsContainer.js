import React from "react";
import TripItem from '../components/TripItem'

class TripsContainer extends React.Component {

  renderTrips = (tripsArray) => {
    console.log(this.props.trips, tripsArray)
    return tripsArray.map((trip) => <TripItem key={trip.id} trip={trip}/>)
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
