import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <section id='about-trinder'>
          <div className='row'>
            <h2>Who We Are</h2>
            <p className='long-copy'>
              Here at Trinder, we know the importance of the preservation and
              the power of connecting to nature. Our mission is to inspire
              people to explore while bringing them closer together.
            </p>
          </div>

          <div className='sub-section'>
            <div className='title col span-1-of-4 box' id='first-col'>
              <h3>Plan Adventures</h3>
              <p>
                There is no best time to start. Plan and post your dream trip
                and connect with others to share equipment, car-rides, or meet
                qualified partners for unique and high-skill expeditions, such
                as hunting, ice-climbing, or sailing.  Connect with other users to share tips and tricks, and travel advice.
              </p>
            </div>

            <div className='title col span-1-of-4 box'>
              <h3>Find Travel Buddies</h3>
              <p>
                We are passionate about building community around the belief
                that through exploring nature we can strengthen our most
                precious relationships- to each other, the earth, and ourselves.  You can post trips of any length, from day-trips to month-long expeditions find buddies to travel with, and find new ones along the way!
              </p>
            </div>

            <div className='title col span-1-of-4 box'>
              <h3>Pay it Forward</h3>
              <p>Maybe you're a seasoned outdoors-enthusiast and want inspire others to experience the places you've gone, or you know someone who would love to travel, but doesn't know where to start - look no further.  Through our community outreach program, you can sponsor a trip with one of our partner organizations. </p>
            </div>

            <div className='title col span-1-of-4 box'>
              <h3>Support Conservation</h3>
              <p>
                Whether you're new to the outdoors, or planning trips just isn't
                your thing, we've got you covered.  Book a trip led by one of our
                experienced and wilderness-certified team members- You can
                explore safely and 10% of proceeds go to preserving our nation's
                most precious asset.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Welcome;
