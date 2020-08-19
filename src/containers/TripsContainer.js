import React from "react";
import TripItem from "../components/TripItem";
import { Route, Switch, withRouter } from 'react-router-dom'

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
      <TripItem user={this.props.user} key={trip.id} trip={trip} tripShowClickHandler={this.props.tripShowClickHandler} />
    ));
  };

  render() {
    return (
      <>
          {this.state.trips.length === 0 ? <h1>Loading</h1> : 
          <>
      <Switch>
          {/* this 'match' object is part of the router props */}
          <Route path= '/trips/:id' render={({match}) => {
              let id = parseInt(match.params.id)
              let foundTrip = this.state.trips.find((trip) => trip.id === id)
              console.log(match)
              return <TripItem trip={foundTrip} tripShowClickHandler={this.props.tripShowClickHandler}  />

       
      }} />
          <Route path='/trips' render={() => {
                 
              return (
               
                 <div className='landing'>
                  <h2>All Trips</h2>
                  <div className='trips-container'>
                 {this.renderTrips(this.state.trips)}
                 </div>
                  </div>
                  );
}}/>

              )
              
       </Switch>
       </>
      }
      </>
  )
}
    }
  

export default withRouter(TripsContainer);
