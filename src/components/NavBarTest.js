import React from 'react'
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";


const Test = (props) => {

return (
  <nav>
    {console.log(props)}
    <div className='row'>
      <ul className='main-nav js--main-nav'>
        <Link to='#trips'>Trips</Link>
        <Link to='#about-trinder'>About Trinder</Link>
        <Link to='#parks'>Participating Parks</Link>
        <Link to='#sign-up'>Sign Up</Link>
        {props.user ? (
          <NavLink to='/login'>Log out</NavLink>
        ) : (
          <NavLink to='/login'>Log In</NavLink>
        )}
        {/* <a class='mobile-nav-icon'>
          <ion-icon name='menu-outline'></ion-icon>
        </a> */}
      </ul>
    </div>
  </nav>
);
}
export default Test
