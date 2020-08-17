import React from "react";
import TripItem from '../components/TripItem'
import CreateTripsForm from '../components/CreateTripsForm'

class TripsContainer extends React.Component {

  renderTrips = (tripsArray) => {
    console.log(this.props.trips, this.props.user)
    return tripsArray.map((trip) => <TripItem key={trip.id} trip={trip}/>)
  }
  
  render() {
    return (
      <section>
        {/*want to add options to see all trips, search trips, create trips*/}
        <div>
          <CreateTripsForm user={this.props.user} stateHandler={this.props.stateHandler}/>
        </div>
        <div>{this.renderTrips(this.props.trips)}</div>
      </section>
    );
  }
}

export default TripsContainer;
