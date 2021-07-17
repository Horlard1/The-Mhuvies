import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { movieContest } from '../../context/moviesContext'
import Movie from './movie'
import './movies.css'

const Movies = () => {
    const history = useHistory()
    const [movies]= useContext(movieContest)
    const handleClick=(data)=>{
        history.push(`/movie/${data}`)
    }
    return (
        <div className="movies__cards">
            {(movies && movies.length > 0) ? movies.map(movie=>(
                <div onClick={()=>handleClick(movie.id)} key={movie.id} className="movie__card">
                    <Movie movie={movie} />
                </div>
            )): <div></div>}
        </div>
    )
}

export default Movies
