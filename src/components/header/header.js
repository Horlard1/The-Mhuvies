import React, { useContext, useEffect } from 'react'
import './header.css'

import {  NavLink, useHistory } from 'react-router-dom'
import { userContext } from '../../context/userContext'
import { listContext } from '../../context/listContext'
const Header = () => {
    const history = useHistory()
    const [user, setUser] = useContext(userContext)
    const [list] = useContext(listContext)
    useEffect(()=>{
        if(!user){
            const userL = JSON.parse(localStorage.getItem('user'))
            if(userL && userL.trim().length > 0){
                setUser(userL)
            }
        }
        
    }, [user, setUser])
    return (
        <header>
            <div className="header__logo">
                <NavLink to="/">The <span>Mhuvies</span></NavLink>
                
            </div>
            {(!user && !user.trim().length > 0) && <ul className="login">
                <li><NavLink to="#"><i className="fas fa-sign-in-alt"></i>Login</NavLink></li>
            </ul>}
            {(user && user.trim().length > 0) && <ul className="users">
                <li onClick={()=>history.push('/watchlists')}><i className="fas fa-film"></i><span>{list.length}</span></li>
                <li><span><i className="fas fa-user"></i>{user.split('@')[0]}</span></li>
                </ul>}
        </header>
    )
}

export default Header
