import React from "react";
import ParkItem from '../components/ParkItem'

class ParksContainer extends React.Component {

 renderParks =  (parksObj) => {
   return parksObj.map((park, index) => <ParkItem key={index} park={park}/>)
 }

render() {
  return (
    <section className='section-parks' id='parks'>
      <div>
        <h2>Parks:</h2>
      </div>
      <div>{this.renderParks(this.props.parks)}</div>
    </section>
  );
}
}

export default ParksContainer;
