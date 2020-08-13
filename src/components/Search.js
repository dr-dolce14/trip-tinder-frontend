import React, { useState } from "react";

const Search = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('')


  const onSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(searchTerm)
  }

    return (
    <div>
      Search for Parks!
      <br />
      <form onSubmit={onSubmit}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <input type="submit" value="search" />
      </form>
    </div>)
}

export default Search;
