import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
    return (
        <footer>
            <h2>The Mhuvies &copy; Copyright 2021. </h2>
            <ul>
                <li><Link target="_blank" to={{pathname: "https://github.com/Horlard1"}}><i className="fab fa-github"></i></Link></li>
                <li><Link target="_blank" to={{pathname:"https://www.linkedin.com/in/omotuyole-olawale-olamide-17566713a/"}}><i className="fab fa-linkedin"></i></Link></li>
            </ul>
        </footer>
    )
}

export default Footer
