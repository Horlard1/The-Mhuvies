import React from 'react'
import Register from './pages/Register/register'
import Login from './pages/Login/login'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home/home'
import Header from './components/header/header'
import MoviesContextProvider from './context/moviesContext'

const App = () => {
  return (
    <Router>
      <div className="app" style={{background: "black"}}>
        <MoviesContextProvider>
          <Header />
          <Home />
          {/* <Register />
          <Login /> */}
        </MoviesContextProvider>
      </div>
    </Router>
  )
}

export default App
