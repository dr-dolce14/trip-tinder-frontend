import React from "react";

import { Route, withRouter, Switch } from "react-router-dom";
import TripsContainer from "./containers/TripsContainer";
import ParksContainer from "./containers/ParksContainer";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import LoginForm from './components/LoginForm'
import CreateUserForm from "./components/CreateUserForm";
import './resources/css/style.css'

class App extends React.Component {
  state = { selectedPark: '', parks: [], trip: {}, user: null }; // is null wrong here? i tried nil and it didn't work

  componentDidMount() {
    const token = localStorage.getItem("token")
    if(token) {
      fetch("http://localhost:3001/api/v1/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(resp => resp.json())
      .then(data => this.setState({ user: data.user }))
    } else {
      this.props.history.push('/signup')
    }
  }

  appClickHandler = (trip_obj) => {
    this.setState({ trip: trip_obj });
  };
  
  searchTripsSubmitHandler = (searchTerm) => {

  //componentDidMount() {
  //  this.onTermSubmit();
  //}

    //fetch from our backend?
  };

  //onTermSubmit = async (searchTerm) => {
  //  const response = await nps.get('', {
  //    params: {stateCode: `${searchTerm}`}});
//
  //  this.setState({
  //    parks: response.data,
  //    selectedPark: response.data[0]
  //  }, () => console.log(this.state));
  //};

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

  onSearchSubmit = (parksObj) => {
    console.log(parksObj)
    this.setState({ parks: parksObj }, () => this.props.history.push('/parks'));
        
  };

  logOutHandler = () => {
    localStorage.removeItem("token")
    this.props.history.push('/login')
    this.setState({ user: null })
  }


  render() {
    return (
      <div>
        <NavBar user={this.state.user} clickHandler={this.logOutHandler}/>
        <Switch>
        <Route 
        path='/parks/search'
        render={() => (
        <Search submitHandler={this.onSearchSubmit}
         />
        )}
        />
        <Route
          path='/trips'
          render={() => (
            <TripsContainer
              user={this.state.user}
              appClickHandler={this.appClickHandler}
            />
          )}
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
        <Route path='/about' render={() => <Welcome />} />
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
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
