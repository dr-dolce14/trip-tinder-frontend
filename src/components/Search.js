import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onSubmit =  (e) => {
    e.preventDefault()
    console.log(props)
    props.submitHandler(searchTerm)
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
