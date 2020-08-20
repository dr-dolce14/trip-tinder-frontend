import React from "react";
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import TripsContainer from "./containers/TripsContainer";
import ParksContainer from "./containers/ParksContainer";
import Header from "./components/Header";
import About from "./components/About";
import LoginForm from "./components/LoginForm";
import CreateUserForm from "./components/CreateUserForm";
import Trips from "./components/Trips";
import SearchParks from "./components/SearchParks";
import SearchTrips from "./components/SearchTrips";
import CreateTripsForm from "./components/CreateTripsForm";
import SelectTripsOptions from "./components/SelectTripsOptions";

class App extends React.Component {
  state = { selectedPark: "", trips: [], parks: [], user: null, trip: {} };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token !== 'undefined') {
      fetch("http://localhost:3001/api/v1/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(resp=>resp.json())
      .then(data => this.setState({user: data.user }))
    } else {
      this.props.history.push('/login')
    }
  }

  loginHandler = (userInfo) => {
    console.log(userInfo)
    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: userInfo }),
    })
    .then(resp=>resp.json())
    .then(data => {this.validUser(data)})
  };

  validUser = (data) => {
    if (data.message) {
      alert(data.message)
    } else {
      localStorage.setItem('token', data.jwt)
      this.setState({user: data.user }, () => this.props.history.push('/trips-choose'))
    }
  }

  signUpHandler = (userObj) => {
  console.log(userObj);
  fetch("http://localhost:3001/api/v1/users", {
    method: "POST",
    headers: {
      accepts: "application/json",
      "content-type": "application/json",
    },
      body: JSON.stringify({ user: userObj }),
    })
    .then((resp) => resp.json())
    .then((userObj) =>
      this.setState({ user: userObj.user }, () =>
        this.props.history.push("/trips-choose")
      )
    );
  };

  logOutHandler = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
    this.setState({ user: null });
  };

  onSearchSubmit = (parksObj) => {
    console.log(parksObj);
    let filtered = parksObj.filter((park) => park.images.length > 0);
    this.setState({ parks: filtered }, () => this.props.history.push("/parks"));
  };

  tripsHandler = (tripsObj) => {
    console.log(tripsObj, this.state.user);
    this.setState({ trips: [...this.state.trips, tripsObj] }, () =>
      this.props.history.push("/trips")
    );
  };

  tripShowClickHandler = (tripObj) => {
    this.setState({
      trip: tripObj,
    });
  };

  render() {
    console.log('current user', this.state.user)
    return (
      <div>
        <Header
          user={this.state.user}
          clickHandler={this.logOutHandler}
          loginHandler={this.loginHandler}
        />
        <Switch>
          <Route
            path='/parks/search'
            render={() => <SearchParks submitHandler={this.onSearchSubmit} />}
          />
          <Route
            path='/trips-search'
            render={() => <SearchTrips stateHandler={this.tripsHandler} />}
          />
          <Route
            path='/parks'
            render={() => <ParksContainer parks={this.state.parks} />}
          />
          <Route
            path='/trips'
            render={() => (
              <TripsContainer
                trips={this.state.trips}
                fetchTrips={this.fetchTrips}
                user={this.state.user}
                tripShowClickHandler={this.tripShowClickHandler}
              />
            )}
          />

          <Route
            path='/trips-create'
            render={() => (
              <CreateTripsForm
                user={this.state.user}
                stateHandler={this.tripsHandler}
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
          <Route path='/trips-choose' render={() => <SelectTripsOptions />} />
          <Route
            exact
            path='/'
            render={() => (
              <div>
                <About />
                <Trips />
                <CreateUserForm />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
