import React from 'react'
import './header.css';
import Logo from '../asserts/decocation.jpg'
import Profile from '../asserts/profile.jpg';
function Header() {
  return (
    <div>
        <nav class="nav-bar">
        <div class="logo-wrapper">
            <img src={Logo} alt="logo for foodie app"/>
        </div>
        <div class="profile-wrapper">
            <div class="profile-name">Hello, Arun Pragash</div>
            <div class="profile-image"><img src={Profile} alt=""/></div>
        </div>
    </nav>
    </div>
  )
}

export default Header