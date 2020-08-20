import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(props) {
  return (
    <nav>
      <div>
        <div className='main-nav'>
          <NavLink to='/trips-choose'>Trips</NavLink>
          <NavLink to='/parks/search'>Parks</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/signup'>Sign up</NavLink>

          {props.user ? (
            <NavLink to='/login' onClick={props.clickHandler}>
              Log out
            </NavLink>
          ) : (
            <NavLink to='/login'>Log In</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar