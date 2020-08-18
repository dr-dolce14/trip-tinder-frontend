import React, { useState } from "react";
import StateDropdown from './StateDropdown'

const SearchTrips = (props) => {
  const tripsUrl = "http://localhost:3001/api/v1/trips/";
  const [searchTerm, setSearchTerm] = useState("");
  const searchOptions = ["State", "Difficulty", "Park"];

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    onTermSubmit(searchTerm);
  };

  const onTermSubmit = (searchTerm, searchValue) => {
    console.log(searchTerm);
    fetch(tripsUrl, {
      method: "GET",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
        term: `${{ searchTerm: searchValue }}`,
      },
    }).then((resp) => resp.json());
    //.then(data => props.stateHandler(data))
    //props.stateHandler(response);
  };


  return (
    <section className='section-trips js--section-trips' id='trips'>
      <div>
        <StateDropdown/>
      </div>
      <div className='row'>
        <h2 className='title'>Search for Trips:</h2>
      </div>

      <div className='row'>
        <form className='form' onSubmit={onSubmit}>
          <div className='title'>
            <div className='col span-1-of-4'>
              <label for='state' className='row'>
                State
              </label>
              <input
                type='radio'
                value='state'
                checked={searchTerm === "state"}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className='title'>
            <div className='col span-1-of-4'>
              <label for='difficulty' className='row'>
                Difficulty rating
              </label>
              <select
                type='radio'
                value='difficulty'
                checked={searchTerm === "difficulty"}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className='title'>
            <div className='col span-1-of-4'>
              <label for='park' className='row'>
                Park
              </label>
              <input
                type='radio'
                value='park'
                checked={searchTerm === "park"}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
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
                checked={searchTerm === "startdate"}
                onChange={(e) => setSearchTerm(e.target.value)}
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
};
export default SearchTrips;
