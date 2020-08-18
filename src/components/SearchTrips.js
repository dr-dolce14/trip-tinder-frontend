import React from "react";

import states from "./states";

const tripsUrl = "http://localhost:3001/api/v1/trips/";
const range = [1,2,3,4,5,6,7,8,9,10]
class SearchTrips extends React.Component {
  state = {
    searchTerm: [],
    parks: [],
    unitedStates: states,
  };

  componentDidMount() {
    let initialParks = [];
    fetch("http://localhost:3001/api/v1/parks")
    .then((resp) => resp.json())
    .then((data) => {
      initialParks = data.map((park) => {
        return park;
      });
      this.setState({
        parks: initialParks,
      });
    });
  }


  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchTerm);
    this.onTermSubmit(this.state.searchTerm);
  };

  changeHandler = (e) => {
    this.setState({
      searchTerm: [e.target.name, e.target.value],
    });
    console.log(this.state, e.target.value)
  };

  onTermSubmit = (searchTerm) => {
    
    fetch(tripsUrl, {
      method: "GET",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
        term: searchTerm,
      },
    })
      .then((resp) => resp.json())
      .then((data) => this.props.stateHandler(data));
  };

  render() {
    return (
      <section className='section-trips js--section-trips' id='trips'>
        <div></div>
        <div className='row'>
          <h2 className='title'>Search for Trips:</h2>
        </div>

        <div className='row'>
          <form className='form' onSubmit={this.onSubmit}>
            <div className='title'>
              <div className='col span-1-of-4'>
                <label for='state' className='row'>
                  State
                </label>
                <select name='state' onChange={this.changeHandler}>
                  <option value="" disabled selected hidden></option>
                  {this.state.unitedStates.map((state) => {
                    return (
                      <option name={state.state} value={state.abbr}>
                        {state.state}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className='title'>
              <div className='col span-1-of-4'>
                <label for='difficulty' className='row'>
                  Difficulty rating
                </label>
                <select
                  name='difficulty_rating'
                  onChange={(e) =>
                    this.changeHandler(e)}
                >
                  <option value="" disabled selected hidden></option>
                  {range.map((rating) => {
                    return (
                      <option key={rating} value={rating}>
                        {rating}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className='title'>
              <div className='col span-1-of-4'>
                <label for='park' className='row'>
                  Park
                </label>
                <select
                  name='park_id'
                  onChange={(e) =>
                    this.changeHandler(e)}
                >
                  <option value="" disabled selected hidden></option>
                  {this.state.parks.map((park) => {
                    return (
                      <option key={park.id} value={park.id}>
                        {park.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className='title'>
              <div className='col span-1-of-4'>
                <label for='startdate' className='row'>
                  Start Date
                </label>
                <input
                  type='radio'
                  value='startdate'
                  checked={this.state.searchTerm === "startdate"}
                  onChange={(e) => this.changeHandler(e)}
                />
              </div>
            </div>
            <div className='title'>
              <input className='button' type='submit' value='Search' />
            </div>
          </form>
        </div>
      </section>
    );
  }
};
export default SearchTrips;
