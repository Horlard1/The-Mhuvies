import React from 'react'
import './header.css'

import {  NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <NavLink to="/">The <span>Mhuvies</span></NavLink>
                
            </div>
            <ul>
                <li><NavLink to="#"><i className="fas fa-sign-in-alt"></i>Login</NavLink></li>
                <li><NavLink to="#"><i className="fas fa-user-plus"></i>Register</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
