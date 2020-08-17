import React from "react";

import { Route, withRouter, Switch } from "react-router-dom";
import TripsContainer from "./containers/TripsContainer";
import ParksContainer from "./containers/ParksContainer";
import Header from './components/Header'
import About from "./components/About";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import SearchTrips from "./components/SearchTrips";
import LoginForm from './components/LoginForm'
import CreateUserForm from "./components/CreateUserForm";
import Trips from "./components/Trips";
import Parks from "./components/Parks";
import Testimonials from "./components/Testimonials";
import './resources/css/style.css'

class App extends React.Component {
  state = { selectedPark: '', trips: [], parks: [], user: null }

  componentDidMount() {
    const token = localStorage.getItem("token")
    if(token) {
      fetch("http://localhost:3001/api/v1/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((resp) => resp.json())
        .then((data) =>
          this.setState({ user: data.user }, () =>
            this.props.history.push("/")
          )
        );
    }
  }

  signUpHandler = (userObj) => {
    console.log(userObj)
    fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({user: userObj})
    })
      .then(resp => resp.json())
      .then(userObj =>this.setState({user: userObj}, () => this.props.history.push('/trips')))
  }

  loginHandler = (userInfo) => {
    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: userInfo }),
    })
      .then((resp) => resp.json())
      .then(userInfo => {
        localStorage.setItem("token", userInfo.jwt)
        this.setState({user: userInfo}, () => this.props.history.push('/trips'));
  })
  }

  logOutHandler = () => {
    localStorage.removeItem("token")
    this.props.history.push('/login')
    this.setState({ user: null })
  }

  onSearchSubmit = (parksObj) => {
    console.log(parksObj)
    this.setState({ parks: parksObj }, () => this.props.history.push('/parks'));
        
  };

  tripsHandler = (tripsObj) => {
    console.log(tripsObj)
    this.setState({ trips: tripsObj}, () =>
    this.props.history.push('/trips')
    
    );
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route
            path='/parks/search'

            render={() => <Search submitHandler={this.onSearchSubmit} />}
          />
          <Route
            path='/trips/search'
            render={() => <SearchTrips stateHandler={this.tripsHandler} />}
        />
        <Route
          path='/parks'
          render={() => (
            <ParksContainer
            parks={this.state.parks}
            appClickHandler={this.appClickHandler}
            />
            )}
        />
        <Route
          path='/trips'
          render={() => (
            <TripsContainer
            trips={this.state.trips}
            appClickHandler={this.appClickHandler}
            />
            )}
        />
        <Route path='/about' render={() => <About />} />
        <Route
          path='/signup'
          render={() => (
            <CreateUserForm
            user={this.state.user}
            submitHandler={this.signUpHandler}
            />
            )}
        />
        <Route
          path='/login'
          render={() => <LoginForm submitHandler={this.loginHandler} />}
        />
        <Route
         exact path='/' render={() => 
          <div>
           <About/>
           <Trips/>
           <Parks/>
           <Testimonials/>
           <CreateUserForm/>
         </div>
         } />
        </Switch>
         <NavBar user={this.state.user} clickHandler={this.logOutHandler} />
        
      </div>
    );
  }
}

export default withRouter(App);
