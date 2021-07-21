import React, { useContext } from 'react'
import { listContext } from '../../context/listContext'

const Watchlists = () => {
    const [list] = useContext(listContext)

    return (<div className="watch__lists">
        {(list && list.length > 0) ? list.map(item=>(
            <watchlist items={item} />
        ))
        : <div className="empty__list">
            <span><i className="fas fa-film"></i></span>
            <h3>No items on your watchlist yet</h3>
        </div>
        }
        </div>)
}

export default Watchlists
