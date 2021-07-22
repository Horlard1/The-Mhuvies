import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Pages
// import Register from './pages/Register/register'
// import Login from './pages/Login/login'
import Home from './pages/home/home'
import Login from './pages/Login/login';

//Components
import Header from './components/header/header'
import SingleMovie from './components/movies/singleMovie'
import Videos from './components/videos/videos';
import Footer from './components/footer/footer';

//Context
import MoviesContextProvider from './context/moviesContext'
import VideoContextProvider from './context/videoContext';
import UserContextProvider from './context/userContext';
import ListContextProvider from './context/listContext';
import Watchlists from './pages/watchlist/watchlists';

const App = () => {
  return (
    <Router>
      <div className="app" style={{background: "black"}}>
        <Switch>
          <UserContextProvider>
            <MoviesContextProvider>
              <ListContextProvider>
                <VideoContextProvider>
                  <Header />
                  <ToastContainer />
                  <Route exact path="/" component= {Home} />
                  <Route exact path ='/movie/:id' component={SingleMovie} />
                  <Route exact path="/watch-preview" component={Videos} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path="/watchlists" component={Watchlists} />
                  {/* <Register />
                  <Login /> */}
                  <Footer />
                </VideoContextProvider>
              </ListContextProvider>
            </MoviesContextProvider>
          </UserContextProvider>
        </Switch>
      </div>
    </Router>
  )
}

export default App
