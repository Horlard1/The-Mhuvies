import React, {useContext} from 'react'
import { movieContest } from '../../context/moviesContext'
import Movie from './movie'
import './movies.css'

const Movies = () => {
    const [movies]= useContext(movieContest)
    return (
        <div className="movies__cards">
            {(movies && movies.length > 0) ? movies.map(movie=>(
                <div key={movie.id} className="movie__card">
                    <Movie movie={movie} />
                </div>
            )): <div></div>}
        </div>
    )
}

export default Movies
