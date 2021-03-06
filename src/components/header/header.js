import React, { useContext, useEffect, useState } from 'react'
import './header.css'

import {  NavLink, useHistory } from 'react-router-dom'
import { userContext } from '../../context/userContext'
import { listContext } from '../../context/listContext'
const Header = () => {
    const history = useHistory()
    const [user, setUser] = useContext(userContext)
    const [show, setShow] = useState('')
    const [classname, setClassname] = useState('')
    const [list] = useContext(listContext)

    useEffect(()=>{
        if(!user){
            const userL = JSON.parse(localStorage.getItem('user'))
            if(userL && userL.trim().length > 0){
                setUser(userL)
            }
        }
        
    }, [user, setUser])
    useEffect(()=>{
        if(list.length > 0){
            setClassname('list__active')
        }setTimeout(()=>{
            setClassname('')
        }, 1500)
    }, [list])
    const displayLogout=(e)=>{
        setShow('show')
    }
    const logOut =()=>{
        localStorage.removeItem('user')
        window.location.replace('/')
    }
    window.onclick = (e)=>{
        const er = new Array(...e.target.classList)
        if(er.includes('ev')){
            setShow('show')
        }else{
            setShow('')
        }
    }
    return (
        <header>
            <div className="header__logo">
                <NavLink to="/">The <span>Mhuvies</span></NavLink>
                
            </div>
            {(!user && !user.trim().length > 0) && <ul className="login">
                <li><NavLink to="/login"><i className="fas fa-sign-in-alt"></i>Login</NavLink></li>
            </ul>}
            {(user && user.trim().length > 0) && <ul className="users">
                <li className={classname} onClick={()=>history.push('/watchlists')}><i className='fas fa-film'></i><span>{list.length}</span></li>
                <li className="user ev" onClick={displayLogout}>
                    <span className="ev"><i className='fas ev fa-user'></i>{user.split('@')[0]}</span>
                </li>
                <li  className={`hide ev ${show ? show : ''}`}><span className="ev" onClick={()=>logOut()}>Logout</span></li>
                </ul>}
        </header>
    )
}

export default Header
