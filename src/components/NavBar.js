import React from 'react'
import { NavLink } from 'react-router-dom'
import '../resources/css/MainNav.css'
import { OmitProps } from 'antd/lib/transfer/ListBody';

function NavBar(props) {
    return (
      <header>
        <nav>
          <div className='row'>
            <div className='main-nav js--main-nav'>
              <NavLink to='/trips'>Trips</NavLink>
              {/* <NavLink to='/parks'>Parks</NavLink> */}
              <NavLink to='/parks/search'>Search Parks</NavLink>
              <NavLink to='/about'>About Trinder</NavLink>
              <NavLink to='/signup'>Sign up</NavLink>
              
              {props.user ? 
              <button onClick={props.clickHandler}>Log out</button> :
              <NavLink to='/login'>Log In</NavLink>
            }
            </div>
          </div>
        </nav>

        <div className='row'>
          <div className='hero-text-box'>
            <h1>
              The clearest way into the Universe is through a forest wilderness.
            </h1>{" "}
            <br /> <h1>How will you get there?</h1>
          </div>
        </div>
      </header>
    );
}

export default NavBar