import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className='row'>
          <ul className='main-nav js--main-nav'>
            <li><NavLink to='/trips'>Trips</NavLink></li>
            <li><NavLink to='/parks'>Parks</NavLink></li>
            <li><NavLink to='/about'>About Trinder</NavLink></li>
            <li><NavLink to='/signup'>Sign up</NavLink></li>
            <li><NavLink to='/login'>Log In</NavLink></li>
          </ul>
        </div>
    );
}

export default NavBar