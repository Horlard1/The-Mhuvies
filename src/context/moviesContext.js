import React, {createContext, useState} from 'react'

export const movieContest = createContext()

function MoviesContextProvider (props){
    const [movies, setMovies] = useState(null)
    const data = [movies, setMovies]
    return (
        <movieContest.Provider value={data}>
            {props.children}
        </movieContest.Provider>
    )
}

export default MoviesContextProvider
