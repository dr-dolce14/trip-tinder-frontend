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
