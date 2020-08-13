import React from "react";
import { Route } from "react-router-dom";
import TripsContainer from "./containers/TripsContainer";
import ParksContainer from "./containers/ParksContainer";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import CreateUserForm from "./components/CreateUserForm";
import nps from "./apis/nps";

class App extends React.Component {
  state = { selectedPark: '', parks: [], trip: {}, user: null }; // is null wrong here? i tried nil and it didn't work

  appClickHandler = (trip_obj) => {
    this.setState({ trip: trip_obj }, () => console.log("hi"));
  };

  componentDidMount() {
    this.onTermSubmit();
  }

  searchTripsSubmitHandler = (searchTerm) => {
    //fetch from our backend?
  };

  onTermSubmit = async (searchTerm) => {
    const response = await nps.get('', {
      params: {stateCode: `${searchTerm}`}});

    this.setState({
      parks: response.data,
      selectedPark: response.data[0]
    });
  };

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
      .then(console.log)
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Route
          path='/trips'
          render={() => (
            <TripsContainer user={this.state.user} appClickHandler={this.appClickHandler} />
          )}
        />
        <Route
          path='/parks'
          render={() => (
            <ParksContainer parks={this.state.parks} appClickHandler={this.appClickHandler} onFormSubmit={this.onTermSubmit} />
          )}
        />
        <Route
          path='/signup'
          render={() => (
            <CreateUserForm
              user={this.state.user} submitHandler={this.signUpHandler}
            />
          )}
        />
        <Route
          path='/home'
          render={() => <Welcome  />}
        />
      </div>
    );
  }
}
export default App;
