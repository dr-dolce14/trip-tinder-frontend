import { Anchor } from "antd";
import React from 'react'

const { Link } = Anchor;

const Test = () => {

return (
  <nav>
      <div id="nav-container">

        <Anchor className='main-nav js--main-nav'>
            <Link href='#trips' title='Trips' />
            <Link href='#about-trinder' title='About Trinder' />
            <Link href='#search-parks' title='Search Parks' />
            <Link href='#sign-up' title='Sign Up' />
            {" "}
            <Link href='/login' id='/login' title='Log In' />
        </Anchor>
    </div>
  </nav>
);
}
export default Test
