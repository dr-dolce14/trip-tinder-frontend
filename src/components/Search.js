import React, { useState } from "react";
import nps from "../apis/nps";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

    const onTermSubmit = async (searchTerm) => {
      const response = await nps.get(
        "",
        {
          params: { stateCode: `${searchTerm}` },
        }
      );

      const parksObj = response.data.data

      console.log(parksObj)
      props.renderParks(parksObj)

    };


  const onSubmit =  (e) => {
    e.preventDefault()
    console.log(props)
    onTermSubmit(searchTerm)
    console.log(searchTerm)
  }

    return (
      <section className='section-parks js--section-parks' id='parks'>
        <div className='row sign-up-form' >
          <h4>Search for Parks!</h4>
          <br />
          <form onSubmit={onSubmit}>
            <input
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input type='submit' value='search' />
          </form>
        </div>
      </section>
    );
}

export default Search;
