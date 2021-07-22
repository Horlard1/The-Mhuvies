import React, { useContext } from 'react'
import { listContext } from '../../context/listContext'
import Watchlist from './watchlist'
import './watchlist.css'
const Watchlists = () => {
    const [list] = useContext(listContext)

    return (<div className="watch__lists">
        {(list && list.length > 0) ? list.map(item=>(
            <div className="watch__list" key={item.id}>
                <Watchlist item={item} />
            </div>
        ))
        : <div className="empty__list">
            <div>
                <i className="fas fa-film"></i>
                <h3>No items on your watchlist yet</h3>
            </div>
        </div>
        }
        </div>)
}

export default Watchlists
