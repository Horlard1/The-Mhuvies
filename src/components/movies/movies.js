import React, {useContext} from 'react'
import { movieContest } from '../../context/moviesContext'
import Movie from './movie'
import './movies.css'
import { Link } from 'react-router-dom'

const Movies = () => {
    const [movies]= useContext(movieContest)
    return (
        <div className="movies__cards">
            {(movies && movies.length > 0) ? movies.map(movie=>(
                <Link to={`/movie/${movie.id}`} key={movie.id} className="movie__card">
                    <Movie movie={movie} />
                </Link>
            )): <div></div>}
        </div>
    )
}

export default Movies
