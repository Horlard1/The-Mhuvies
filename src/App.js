import React from 'react'
import Register from './components/Register/register'
import Login from './components/Login/login'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home/home'
import Header from './components/header/header'


const App = () => {
  return (
    <Router>
      <div className="app" style={{background: "black"}}>
        <Header />
        <Home />
        {/* <Register />
        <Login /> */}
      </div>
    </Router>
  )
}

export default App
