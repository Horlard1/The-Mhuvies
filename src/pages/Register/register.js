import React, { useState } from 'react';
import axios from 'axios'

const Register = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const register =()=>{
        
        axios({
            method: "POST",
            data: {
                name,
                password
            },
            withCredentials: true,
            url: "http://localhost:4000/register"
        })
        .then(res=> console.log(res))
        
    }
    return (
        <div>
            <h2>Sign up for registration</h2>
            <label>Username:</label>
            <input type="text"  onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your username" />
            <label>Password:</label>
            <input type="password"  onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password" />
            <button onClick= {register}>Register</button>
        </div>
    )
}

export default Register
