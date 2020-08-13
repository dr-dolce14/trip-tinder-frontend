import React from "react";
import SearchTrips from '../components/SearchTrips'
import { Route, Redirect } from 'react-router-dom'

class TripsContainer extends React.Component {
  render() {
    return (
      <>
      {this.props.user ? 
       <div>
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
