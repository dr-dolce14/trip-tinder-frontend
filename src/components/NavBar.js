import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav>
          <div>
            <div className='main-nav js--main-nav'>
              <NavLink to='/trips'>Trips</NavLink>
              <NavLink to='/trips/search'>Search trips</NavLink>
              <NavLink to='/trips/create'>Create Trip</NavLink>
              {/* <NavLink to='/parks'>Parks</NavLink> */}
              <NavLink to='/about'>About Trinder</NavLink>
              <NavLink to='/parks/search'>Search Parks</NavLink>
              <NavLink to='/signup'>Sign up</NavLink>
              
              {props.user ? 
              <NavLink to="/login" onClick={props.clickHandler}>Log out</NavLink> :
              <NavLink to='/login'>Log In</NavLink>
            }
            </div>
          </div>
        </nav>
    );
}

export default NavBar