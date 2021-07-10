import React from 'react'
import './header.css'

import {  NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                The <span>Mhuvies</span>
            </div>
            <ul>
                <li><NavLink to="#"><i className="fas fa-sign-in-alt"></i>Login</NavLink></li>
                <li><NavLink to="#"><i className="fas fa-user-plus"></i>Register</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
