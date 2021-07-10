import React from 'react'
import Register from './components/Register/register'
import Login from './components/Login/login'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home/home'


const App = () => {
  return (
    <Router>
      <div className="app">
        <Home />
        {/* <Register />
        <Login /> */}
      </div>
    </Router>
  )
}

export default App
