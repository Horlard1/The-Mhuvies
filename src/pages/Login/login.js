import React, {useContext, useState} from 'react'
import { validateEmail } from '../../function/helper';
import './login.css'
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
          localStorage.setItem('user', JSON.stringify(email))
          setTimeout(()=>{
            setUser(email)
            setLoading(false)
            history.goBack()  

          }, 3000)
    }
    const resetFields = ()=>{
        setEmailErr('')
        setPasswordErr('')
    }
    return (
        <div className="login__field">
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
                    <button type="submit">{loading ? <><span>Processing<i className="fas fa-spinner load"></i></span></>: 'Login'}</button>
                </form>
            </div>}
        </div>
      )

}

export default Login
