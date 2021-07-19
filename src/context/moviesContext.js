import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'
export const movieContest = createContext()

function MoviesContextProvider (props){
    const [movies, setMovies] = useState(null)
    const data = [movies, setMovies]
    useEffect(()=>{
        if(movies && movies.length > 0){
            console.log(storeJson(movies))
            
        }
    }, [movies])
    function storeJson(datas){
        datas.forEach(async (data)=>{

            const payload = JSON.stringify(data)
            try {
                const res = await axios.post('http://localhost:8000/autos',payload,{
                headers: {'Content-Type':'application/json'}
                
            })
                return res
            } catch (error) {
                console.log(error.response)
            }
            
        })
    }
    return (
        <movieContest.Provider value={data}>
            {props.children}
        </movieContest.Provider>
    )
}

export default MoviesContextProvider
