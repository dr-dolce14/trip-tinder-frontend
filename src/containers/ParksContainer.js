import React from "react";
//import Park from '../components/Park'
//import { Route } from 'react-router-dom'
import Search from '../components/Search'

const ParksContainer = (props) => {
 console.log(props)

//  const searchedParks = props.parks.map((parkObj, index) => <Park key={parkObj[index]} park={parkObj} /> )
    return (
    <div>
        <Search onFormSubmit={props.onTermSubmit} />
       
      <h2>Parks:</h2>
      {/* {searchedParks} */}
    </div>
    )
  
}

export default ParksContainer;
