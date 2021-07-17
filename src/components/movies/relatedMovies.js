import React, { useContext, useEffect, useState } from 'react'
import { movieContest } from '../../context/moviesContext'
import alternative from '../../asset/not-found.png'
import './movies.css'
import { useHistory } from 'react-router-dom'
const RelatedMovies = ({id}) => {
    const [related, setRelated] = useState(null)
    const [movies] = useContext(movieContest)
    const history = useHistory()
    useEffect(()=>{
        const similar = movies.filter(movie=> movie.id !== id)
        // console.log(similar)
        setRelated(similar)
    },[id, movies])
    const handleClick=(data)=>{
        history.push(`/movie/${data}`)
    }
    return (
        <div className="related__movies">
                <h3>Related Movies</h3>
            <div className="movies__cards">
                {(related && related.length > 0)&& related.map(movie=>(<>
                    <div onClick={()=>handleClick(movie.id)}  className="movie__card">
                        <img className="movies__image" src={movie.i ? movie.i.imageUrl : alternative} alt={movie.l} />
                        <div className="movies__details">
                            <h2>{movie.l && movie.l.length ? movie.l : movie.q}</h2>
                            <h4>By: {movie.s}</h4>
                            <p>Released:  {movie.y ? movie.y : movie.yr ? movie.yr : ''}</p>
                        </div>
                    </div>
                </>))}
            </div>
        </div>
    )
}

export default RelatedMovies
