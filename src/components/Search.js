import React, { useState } from "react";
import nps from "../apis/nps";
import states from './states'

const Search = (props) => {
  const [searchState, setSearchState] = useState('')

  const onSubmit =  (e) => {
    e.preventDefault()
    console.log(searchState)
   onTermSubmit(searchState)
  }

  const onTermSubmit = async (searchState) => {
    const response = await nps.get("", {
      params: { stateCode: `${searchState}` },
    });
    const parksObj = response.data.data;
    console.log(parksObj);
    props.submitHandler(parksObj)
  };
    return (
      <section className='section-parks js--section-parks' id='parks'>
        <div className='box'>
          <h3 className='title'>Search Our Parks</h3>
        </div>
        <div className='row'>
          <form className='form' onSubmit={onSubmit}>
            <div className='col span-2-of-2'>
              <label for='state' className='row'>
                State
              </label>
              <select name='state' onChange={(e) => setSearchState(e.target.value)}>
                <option value='' disabled selected hidden></option>
                {states.map((state) => {
                  return (
                    <option name={state.state} value={state.abbr}>
                      {state.state}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='box title'>
              <input className='btn-full' type='submit' value='search' />
            </div>
          </form>
        </div>
      </section>
    );
}

export default Search;
