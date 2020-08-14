import React from "react";
import SearchTrips from '../components/SearchTrips'
import { Route, Redirect } from 'react-router-dom'
import CreateTripsForm from '../components/CreateTripsForm'

class TripsContainer extends React.Component {
  
  //fetch trip info here? 
  //we should put the create trips form here and we don't want too many levels separating the from from the trip data, right?
  createTripHandler = (obj) => {
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
      <CreateTripsForm tripHandler={this.createTripHandler} />
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
