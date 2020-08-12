import React from 'react';
import { Route } from 'react-router-dom'
import TripsContainer from './containers/TripsContainer'
import ParksContainer from './containers/ParksContainer'
import Welcome from './components/Welcome'
import Header from './components/Header'

class App extends React.Component {
  state = { trip: {}}

  appClickHandler = trip_obj => {
    this.setState({trip: trip_obj}, () => console.log('hi'))
  }

  render() {
    return (
      <div>
        <Header />
        <Route path='/' component={Welcome}/>
        <Route path='/trips' render={() => <TripsContainer appClickHandler={this.appClickHandler}/>} />
        <Route path='/parks' render={() => <ParksContainer appClickHandler={this.appClickHandler}/>} />
      </div>
    );
  }
 
}
export default App;
