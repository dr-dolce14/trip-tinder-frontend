import React from "react";
import TripItem from "../components/TripItem";

import { Route, Switch } from "react-router-dom";

class TripsContainer extends React.Component {

  state = { trips: [] }

  componentDidMount() {
    this.fetchTrips()
    
  }

  fetchTrips = async () => {
      await fetch("http://localhost:3001/api/v1/trips")
        .then((resp) => resp.json())
        .then((data) =>
          this.setState({ trips: data }, () => this.renderTrips(this.state.trips))
        );
    };
  renderTrips = (tripsArray) => {
    console.log(this.props.trips, this.props.user);
    return tripsArray.map((trip) => <TripItem key={trip.id} trip={trip} />);
  };

  render() {
    return <div>{this.renderTrips(this.state.trips)}</div>
  }
}

export default TripsContainer;
