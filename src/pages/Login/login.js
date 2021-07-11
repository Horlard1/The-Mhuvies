import React, {useState} from 'react'
import axios from 'axios';


const Login = () => {
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const login =()=>{
        
        axios({
            method: "POST",
            data: {
                name,
                password
            },
            withCredentials: true,
            url: "http://localhost:4000/login"
        })
        .then(res=> console.log(res))
        
    }
    return (
        <div>
            <h2>Login your details</h2>
            <label>Username:</label>
            <input type="text"  onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your username" />
            <label>Password:</label>
            <input type="password"  onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password" />
            <button onClick= {login}>Login</button>
        </div>
    )

}

export default Login
