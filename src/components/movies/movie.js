import React from 'react'
import alternative from '../../asset/not-found.png'
import { findNums } from '../../function/helper';
const Movie = ({movie}) => {
    const { yr,y, i, l, q , s,} = movie;
        let year = findNums(s)
    return (<>
        <img className="movies__image" src={i ? i.imageUrl : alternative} alt={l} />
        <div className="movies__details">
            <h2>{l && l.length ? l : q}</h2>
            <h4>Directors: {s}</h4>
            <p>Released:  {y ? y : yr ? yr : (year[0] && year[1].length > 0) ? year[1] : ''}</p>
        </div>
    </>)
}

export default Movie
