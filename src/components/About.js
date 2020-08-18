import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <section className='landing' id='about-trinder'>
        <div>
          <h2>Who We Are</h2>
          <p className="long-copy">
            At Trinder- we know the value of the outdoors, and the power of connecting to nature.  Our mission is to inspire people to explore  while bringing  closer together.
          </p>


          {/* <h2>“Between every two pines is a doorway to a new world.”</h2>
          <h2>“One touch of nature makes the whole world kin.”</h2> */}
        </div>
      </section>
    );
  }
}

export default Welcome;
