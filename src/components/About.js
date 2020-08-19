import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <section className='landing' id='about-trinder'>
        <div className='row'>
          <h2>Who We Are</h2>
          <p className='long-copy'>
            Here at Trinder, we know the importance of the preservation and the
            power of connecting to nature. Our mission is to inspire people to
            explore while bringing them closer together.
            {/* <h2>“Between every two pines is a doorway to a new world.”</h2>
          <h2>“One touch of nature makes the whole world kin.”</h2> */}
          </p>
        </div>
        <section>
        <div className='row'>
          <div className='col span-1-of-4 box'>
            <h3>Plan Adventures</h3>
            <p>
              Through our partnership with the National Parks Service, find the
              best spot for your next outdoor endeavor.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col span-1-of-4 box'>
            <h3>Find Travel Buddies</h3>
            <p>
              We take the care of the searching
            </p>
          </div>
        </div>
        </section>
      </section>
    );
  }
}

export default Welcome;
