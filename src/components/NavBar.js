import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <ul>
            <NavLink to="/home">
                <li>Welcome</li>
            </NavLink>
            <NavLink to="/trips">
                <li>Trips</li>
            </NavLink>
            <NavLink to="/parks">
                <li>Parks</li>
            </NavLink>
            <NavLink to="/search">
                <li>Search Trips</li>
            </NavLink>
            <NavLink to="/signup">
                <li>Sign up!</li>
            </NavLink>
        </ul>
    )
}

export default NavBar