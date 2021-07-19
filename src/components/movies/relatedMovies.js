import React, { useContext, useEffect, useState } from 'react'
import { movieContest } from '../../context/moviesContext'
import alternative from '../../asset/not-found.png'
import './movies.css'
import { useHistory } from 'react-router-dom'
const RelatedMovies = ({id}) => {
    const [related, setRelated] = useState(null)
    const [movies] = useContext(movieContest)
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    useEffect(()=>{
        const localMovies = JSON.parse(localStorage.getItem('movies'))
        // console.log(localMovies)
        const similar = movies !== null ?  movies.filter(mov=> mov.id !== id) : localMovies ? localMovies.filter(mov=>mov.id !== id) : null
        setRelated(similar)
    },[id, movies])
    
    const handleClick=(data)=>{
        setLoading(true)
        setTimeout(()=>{
            history.push(`/movie/${data}`)
            setLoading(false)
        }, 1500)
    }
    return (<>{loading && <div className="related__movies__loading">
                <h2>Loading...</h2>
        </div>}
        {!loading && <div className="related__movies">
                <h3>Related Movies</h3>
            <div className="movies__cards">
                {(related && related.length > 0)&& related.map(movie=>(
                    <div onClick={()=>handleClick(movie.id)} key={movie.id} className="movie__card">
                        <img className="movies__image" src={movie.i ? movie.i.imageUrl : alternative} alt={movie.l} />
                        <div className="movies__details">
                            <h2>{movie.l && movie.l.length ? movie.l : movie.q}</h2>
                            <h4>By: {movie.s}</h4>
                            <p>Released:  {movie.y ? movie.y : movie.yr ? movie.yr : ''}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>}
    </>)
}

export default RelatedMovies
