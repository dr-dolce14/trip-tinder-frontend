import React from "react";
import TripItem from '../components/TripItem'
import CreateTripsForm from '../components/CreateTripsForm'
import SelectTripsOptions from '../components/SelectTripsOptions'
import {Route, Switch} from 'react-router-dom'
import TripsContainer from "../containers/TripsContainer";

class TripsLandingPage extends React.Component {

  renderTrips = (tripsArray) => {
    console.log(this.props.trips, this.props.user)
    return tripsArray.map((trip) => <TripItem key={trip.id} trip={trip}/>)
  }
  
  render() {
    return (
      <section className="landing">
        <Switch>
          <Route
            path='/trips-create'
            render={() => (
              <CreateTripsForm
                user={this.props.user}
                stateHandler={this.props.stateHandler}
              />
            )}
          />
          
          <Route path='/trips' render={() => <TripsContainer/>}/>
        </Switch>


        <div>{this.renderTrips(this.props.trips)}</div>
      </section>
    );
  }
}

export default TripsLandingPage;
