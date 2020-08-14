import React from "react";
import Park from '../components/Park'

class ParksContainer extends React.Component {

 renderParks =  (parksObj) => {
   return parksObj.map((park, index) => <Park key={index} park={park}/>)
 }

render() {
  return (
    <section className='section-parks js--section-parks' id='parks'>
      <div>
        <h2>Parks:</h2>
      </div>
      <div>{this.renderParks(this.props.parks)}</div>
    </section>
  );
}
}

export default ParksContainer;
