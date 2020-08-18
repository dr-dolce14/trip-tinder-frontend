import React from "react";
import TripItem from "../components/TripItem";

class TripsContainer extends React.Component {
  state = { trips: [] };

  componentDidMount() {
    this.fetchTrips();
  }

  fetchTrips = async () => {
    await fetch("http://localhost:3001/api/v1/trips")
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({ trips: data }, () => this.renderTrips(this.state.trips))
      );
  };
  renderTrips = (tripsArray) => {
    console.log(this.state.trips, this.props.user);
    return tripsArray.map((trip) => (
      <TripItem user={this.props.user} key={trip.id} trip={trip} />
    ));
  };

  render() {
    return (
      <div className='landing'>
        <h2>All Trips</h2>
        <div className='trips-container'>
          {this.renderTrips(this.state.trips)}
        </div>
      </div>
    );
  }
}

export default TripsContainer;
