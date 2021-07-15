import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Pages
// import Register from './pages/Register/register'
// import Login from './pages/Login/login'
import Home from './pages/home/home'

//Components
import Header from './components/header/header'
import SingleMovie from './components/movies/singleMovie'
import Videos from './components/videos/videos';

//Context
import MoviesContextProvider from './context/moviesContext'
import VideoContextProvider from './context/videoContext';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <Router>
      <div className="app" style={{background: "black"}}>
        <Switch>
          <MoviesContextProvider>
            <VideoContextProvider>
              <Header />
              <ToastContainer />
              <Route exact path="/" component= {Home} />
              <Route exact path ='/movie/:id' component={SingleMovie} />
              <Route exact path="/watch-preview" component={Videos} />
              {/* <Register />
              <Login /> */}
              <Footer />
            </VideoContextProvider>
          </MoviesContextProvider>
        </Switch>
      </div>
    </Router>
  )
}

export default App
