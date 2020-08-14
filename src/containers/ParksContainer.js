import React, { useState } from "react";
import Park from '../components/Park'
//import { Route } from 'react-router-dom'


class ParksContainer extends React.Component {

 renderParks =  (parksObj) => {
   console.log(parksObj)
 }

render() {
  return (
    <section className='section-parks js--section-parks' id='parks'>
      <div>
        <h2>Parks:</h2>
      </div>
      <div>{this.renderParks}</div>
    </section>
  );
}

    
  
}

export default ParksContainer;
