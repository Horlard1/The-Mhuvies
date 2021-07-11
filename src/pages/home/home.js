import React from 'react'
import Form from '../../components/form/form'
import './home.css'
import Movies from '../../components/movies/movies'

const Home = () => {
     
    return (
        <div className="home">
            <Form />
            <Movies />
        </div>
    )
}

export default Home
