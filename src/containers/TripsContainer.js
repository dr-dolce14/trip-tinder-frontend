import React from "react";
import TripItem from '../components/TripItem'
import CreateTripsForm from '../components/CreateTripsForm'
import SelectTripsOptions from '../components/SelectTripsOptions'
import {Route, Switch} from 'react-router-dom'

class TripsContainer extends React.Component {

  renderTrips = (tripsArray) => {
    console.log(this.props.trips, this.props.user)
    return tripsArray.map((trip) => <TripItem key={trip.id} trip={trip}/>)
  }
  
  render() {
    return (
      <section>
        {/*want to add options to see all trips, search trips, create trips*/}
        <Switch>
          <Route
            path='/trips/create'
            render={() => (
              <CreateTripsForm
                user={this.props.user}
                stateHandler={this.props.stateHandler}
              />
            )}
          />
          <Route path='/trips' render={() => <SelectTripsOptions />} />
        </Switch>

        <div>{this.renderTrips(this.props.trips)}</div>
      </section>
    );
  }
}

export default TripsContainer;
