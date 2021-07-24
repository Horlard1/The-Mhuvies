import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import alternative from '../../asset/not-found.png'
import { listContext } from '../../context/listContext'
import './watchlist.css'
const Watchlist = ({item}) => {
    const history = useHistory()
    const [list, setList] = useContext(listContext)
    console.log(item)
    const {l, q, s, i, id} = item
    const handleClick = (idData)=>{
        const filteredList = list.filter(i=> i.id !== idData)
        setList(filteredList)
    }
    return (<>
        <img className="movie__img" src={i ? i.imageUrl : alternative} alt={l} />
        <div className="list__item">
            <h2>{l && l.length ? l : q}</h2>
            <h5>Actors: {s}</h5>
        </div>
        <div className="links">
            <button role="link" onClick={()=>history.push(`/movie/${id}`)}>View Details</button>
            <button onClick={()=>handleClick(id)}>Remove</button>
        </div>
    </>)
}

export default Watchlist
