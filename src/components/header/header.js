import React, { useContext, useEffect } from 'react'
import './header.css'

import {  NavLink } from 'react-router-dom'
import { userContext } from '../../context/userContext'
const Header = () => {
    const [user, setUser] = useContext(userContext)
    useEffect(()=>{
        if(!user){
            const userL = JSON.parse(localStorage.getItem('user'))
            if(userL && userL.trim().length > 0){
                setUser(userL)
            }
        }
        
    }, [user, setUser])
    console.log(user)
    return (
        <header>
            <div className="header__logo">
                <NavLink to="/">The <span>Mhuvies</span></NavLink>
                
            </div>
            {(!user && !user.trim().length > 0) && <ul>
                <li><NavLink to="#"><i className="fas fa-sign-in-alt"></i>Login</NavLink></li>
                <li><NavLink to="#"><i className="fas fa-user-plus"></i>Sign Up</NavLink></li>
            </ul>}
            {(user && user.trim().length > 0) && <>
            <span><i className="fas fa-film"></i></span>
            <span><i className="fas fa-user"></i>{user.split('@')[0]}</span></>}
        </header>
    )
}

export default Header
