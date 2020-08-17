import React from 'react' 
import Test from "./NavBarTest";

const Header = (props) => {
  return(
  <header>
    <Test/>
    <div className='row'>
      <div className='hero-text-box'>
        <h1>
          The clearest way into the Universe is through a forest wilderness.
        </h1>{" "}
        <br /> <h1>How will you get there?</h1>
      </div>
    </div>
  </header>)
}

export default Header;