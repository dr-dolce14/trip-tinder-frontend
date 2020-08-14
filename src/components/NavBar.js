import React from 'react'
import { NavLink } from 'react-router-dom'
import '../resources/css/MainNav.css'

function NavBar() {
    return (
      <header>
        <div className='row'>
          <div className='main-nav js--main-nav'>
            <NavLink to='/trips'>Trips</NavLink>
            <NavLink to='/parks'>Parks</NavLink>
            <NavLink to='/about'>About Trinder</NavLink>
            <NavLink to='/signup'>Sign up</NavLink>
            <NavLink to='/login'>Log In</NavLink>
          </div>
        </div>
      </header>
    );
}

export default NavBar