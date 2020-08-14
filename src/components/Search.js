import React, { useState } from "react";
import nps from "../apis/nps";
import { Redirect } from "react-router-dom"

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onSubmit =  (e) => {
    e.preventDefault()
    console.log(props)
    onTermSubmit(searchTerm)
    console.log(searchTerm)
  }

  const onTermSubmit = async (searchTerm) => {
    const response = await nps.get("", {
      params: { stateCode: `${searchTerm}` },
    });
    const parksObj = response.data.data;
    console.log(parksObj);
    props.submitHandler(parksObj)
  };
    return (
      <section className='section-parks js--section-parks' id='parks'>
        <div className='box'>
          <h3 className="title">Search for Parks!</h3>
        </div>
        <div className='row'>
          <form className='search-form' onSubmit={onSubmit}>
            <div className='col span-2-of-2'>
              <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="box title">
            <input className='btn-full' type='submit' value='search' />
            </div>
          </form>
         
        </div>
      </section>
     

    );
}

export default Search;
