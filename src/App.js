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
  state = { selectedPark: '', parks: [], trip: {}, users: [] };

  appClickHandler = (trip_obj) => {
    this.setState({ trip: trip_obj }, () => console.log("hi"));
  };

  componentDidMount() {
    this.onTermSubmit();
  }

  createUserSubmitHandler = (obj) => {
    let newUsersArray = [...this.state.users, obj];
    this.setState({
      users: newUsersArray,
    });
  };

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
    console.log(this.state.parks)
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <NavBar />
        <Route
          path='/trips'
          render={() => (
            <TripsContainer appClickHandler={this.appClickHandler} />
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
              createUserSubmitHandler={this.createUserSubmitHandler}
            />
          )}
        />
        <Route
          path='/home'
          render={() => <Welcome users={this.state.users} />}
        />
      </div>
    );
  }
}
export default App;
