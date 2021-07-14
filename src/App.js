import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Pages
import Register from './pages/Register/register'
import Login from './pages/Login/login'
import Home from './pages/home/home'

//Components
import Header from './components/header/header'
import SingleMovie from './components/movies/singleMovie'

//Context
import MoviesContextProvider from './context/moviesContext'
import VideoContextProvider from './context/videoContext';

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="app" style={{background: "black"}}>
          <MoviesContextProvider>
            <VideoContextProvider>
              <Header />
              <ToastContainer />
              <Route exact path="/" component= {Home} />
              <Route exact path ='/movie/:id' component={SingleMovie} />
              {/* <Register />
              <Login /> */}
            </VideoContextProvider>
          </MoviesContextProvider>
        </div>
      </Switch>
    </Router>
  )
}

export default App
