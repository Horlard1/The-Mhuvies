import React, {useContext, useState} from 'react'
import axios from 'axios';
import { validateEmail } from '../../function/helper';
import './login.css'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../context/userContext';

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailErr, setEmailErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [, setUser] = useContext(userContext)

    const login = async(e)=>{
        e.preventDefault()
        resetFields()
        if(email.trim().length <= 0){
            return setEmailErr('Email field is required')
          }
          if(validateEmail(email) === false){
            return setEmailErr("Kindly input a valid email")
          }
          if(password.trim().length <= 0){
            return setPasswordErr('Kindly input your password')
          }
          if(password.trim().length <= 5){
            return setPasswordErr('Password must be 6 characters or more')
          }
          setLoading(true)
          try {
            const res = await axios({
                method: "POST",
                data: {
                    email,
                    password
                },
                url: "http://localhost:8000/user"
            })
            if(res.status === 201){
                console.log(res.data.email)
                setUser(res.data.email)
                setLoading(false)
                localStorage.setItem('user', JSON.stringify(res.data.email))
                history.goBack()
            }else{
                throw Error('Could not created account')
            }

          } catch (error) {
              if(error.status === '404'){
                  setLoading(false)
                  toast('Server Error, try again')

              }
          }
        
        
    }
    const resetFields = ()=>{
        setEmailErr('')
        setPasswordErr('')
    }
    return (
        <div className="login__field">
              {loading ? (
                <h4 className="text-warning">loading...please wait.</h4>
              ) : (<>
              {<div className="login__box">
                <h1>Login Here</h1>
                <form onSubmit={login}>
                    <div className="form_ctrl">
                        <label>Username</label>
                        <input type="email" className={emailErr? 'active': ''} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Username" />
                        {emailErr && <small>{emailErr}</small>}
                    </div>
                    <div className="form_ctrl">
                        <label>Password</label>
                        <input type="password"value={password} className={passwordErr? 'active':''} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                        {passwordErr && <small>{passwordErr}</small>}
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>}</>)}
        </div>
      )

}

export default Login
