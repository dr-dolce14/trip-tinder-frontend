import React from "react";

import { Route } from "react-router-dom";
import TripsContainer from "./containers/TripsContainer";
import ParksContainer from "./containers/ParksContainer";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import LoginForm from './components/LoginForm'
import CreateUserForm from "./components/CreateUserForm";
import nps from "./apis/nps";

class App extends React.Component {
  state = { selectedPark: '', parks: [], trips: [], trip: {}, user: null }; 

  //appClickHandler = (trip_obj) => {
  //  this.setState({ trip: trip_obj });
  //};

  //componentDidMount() {
  //  this.onTermSubmit();
  //}

  searchTripsSubmitHandler = (searchTerm) => {
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
      .then(userObj =>this.setState({user: userObj}))
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
      .then(userInfo => this.setState({user: userInfo}, ));
  }

  onTermSubmit = async (searchTerm) => {
    console.log(searchTerm)
      const response = await nps.get(
        "",
        {
          params: { stateCode: `${searchTerm}` },
        }
      );

      const parksObj = response.data.data
        console.log(parksObj)
        this.setState({parks: parksObj})
        console.log(this.state.parks)
       
  };

  render() {
    return (
      <div>
        <NavBar />
         <Search submitHandler={this.onTermSubmit} />
         <ParksContainer parks={this.state.parks}/>
        <Route
          path='/trips'
          render={() => (
            <TripsContainer
              user={this.state.user}
              appClickHandler={this.appClickHandler}
              trips={this.state.trips}
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
      </div>
    );
  }
}
export default App;
