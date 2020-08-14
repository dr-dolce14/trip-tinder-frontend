import React from "react";
import SearchTrips from '../components/SearchTrips'
import { Route, Redirect } from 'react-router-dom'
import CreateTripsForm from '../components/CreateTripsForm'

class TripsContainer extends React.Component {
  
  createTripHandler = (tripObj) => {
    fetch("http://localhost:3001/api/v1/trips", {
      method: "POST",
      headers: {
        "accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({trip: tripObj})
    })
      .then(resp => resp.json())
      .then(newTrip => console.log(newTrip))
  }
  tripStateHandler = (obj) => {
    let newTrips = [...this.state.trips, obj]
    this.setState({
      trips: newTrips
    })
  }
  
  render() {
    return (
      <>
      {this.props.user ? 
       <div>
      <CreateTripsForm user={this.props.user} tripHandler={this.createTripHandler} />
      <br />
       <SearchTrips />
       <br/>
       Trips:
     </div>
      :
      <Redirect to="/signup" />
      }
      </>
   
      )
  }
}

export default TripsContainer;
