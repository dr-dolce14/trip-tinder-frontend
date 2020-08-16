import React from "react";
import Trip from '../components/Trip'

class TripsContainer extends React.Component {

  renderTrips = (tripsArray) => {
    console.log(this.props.trips, tripsArray)
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
