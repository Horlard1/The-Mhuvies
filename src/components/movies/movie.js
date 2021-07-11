import React from 'react'
import { Link } from 'react-router-dom';
import alternative from '../../asset/not-found.png'

const Movie = ({movie}) => {
    const { yr,y, i, rank, l, q , s} = movie;
    return (<>
        <img className="movies__image" src={i ? i.imageUrl : alternative} alt={l} />
        <Link className="movies__watch" to="#" >Watch</Link>
        <div className="movies__details">
            <h2>{l && l.length ? l : q}</h2>
            <h5>Actors: {s}</h5>
            <p>Year of Production: {yr ? yr : y}</p>
            <span>Rank: {rank}</span>
        </div>      
    </>)
}

export default Movie
