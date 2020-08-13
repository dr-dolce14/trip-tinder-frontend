import React from 'react';
import { Route } from 'react-router-dom'
import TripsContainer from './containers/TripsContainer'
import ParksContainer from './containers/ParksContainer'
import Welcome from './components/Welcome'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Search from './components/Search'
import CreateUserForm from './components/CreateUserForm'

class App extends React.Component {
  state = { trip: {}, users: [] }

  appClickHandler = trip_obj => {
    this.setState({trip: trip_obj}, () => console.log('hi'))
  }

  createUserSubmitHandler = (obj) => {
    let newUsersArray = [...this.state.users, obj]
    this.setState({
      users: newUsersArray
    })
  }

  searchTripsSubmitHandler = (searchTerm) =>{
    //fetch from our backend?
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <NavBar />
        <Route path='/trips' render={() => <TripsContainer appClickHandler={this.appClickHandler}/>} />
        <Route path='/parks' render={() => <ParksContainer appClickHandler={this.appClickHandler}/>} />
        <Route path='/search' render={() => <Search searchTripsSubmitHandler={this.searchTripsSubmitHandler}/>} />
        <Route path='/signup' render={() => <CreateUserForm createUserSubmitHandler={this.createUserSubmitHandler}/>} />
        <Route path='/home' render={() => <Welcome users={this.state.users} />}/>
      </div>
    );
  }
 
}
export default App;
