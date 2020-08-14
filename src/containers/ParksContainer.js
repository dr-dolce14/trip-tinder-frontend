import React, { useState } from "react";
import Park from '../components/Park'
//import { Route } from 'react-router-dom'
import Search from '../components/Search'


class ParksContainer extends React.Component {

  state = {
    parks: null
  }

 renderParks =  (parksObj) => {
   this.setState({parks: parksObj})
   console.log(this.state.parks)
 return this.state.parks.map((park, index) => {return<Park key={index} park={park}/>})
 }

//  const searchedParks = props.parks.map((parkObj, index) => <Park key={parkObj[index]} park={parkObj} /> )
render() {
  return (
    <section className='section-parks js--section-parks' id='parks'>
      <div>
        <Search renderParks={this.renderParks} />
        <h2>Parks:</h2>
      </div>
      <div>{this.renderParks}</div>
    </section>
  );
}

    
  
}

export default ParksContainer;
