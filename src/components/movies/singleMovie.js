import React, { useContext, useEffect, useState } from 'react'
import { movieContest } from '../../context/moviesContext'
import alternative from '../../asset/not-found.png'
import axios from 'axios'
import { toast } from 'react-toastify'
import { videoContext } from '../../context/videoContext'
import RelatedMovies from './relatedMovies'

const SingleMovie = ({match, history}) => {
    const [oneMovie, setOneMovie] = useState(null)
    const [movies] = useContext(movieContest)
    const [movieID, setMovieId] = useState('')
    const [, setVideo] = useContext(videoContext)
    useEffect(()=>{
        const id = match.params.id
        const localMovies = JSON.parse(localStorage.getItem('movies'))
        const movie = movies !== null ? movies.filter(mov=> mov.id === id) : localMovies ? localMovies.filter(mov=>mov.id === id) : null
        setOneMovie(movie)
    }, [movies, match.params.id])
    useEffect(()=>{
        if(oneMovie && oneMovie.length > 0){
            oneMovie.forEach(async(item) =>{
                const {v} = item.v ? item: ''
                if(v && v.length > 0){
                    setMovieId(v[2].id)
                }else{
                    const id = match.params.id
                    const headers = {
                        'x-rapidapi-key': process.env.React_APP_API_RAPID_API,
                        'x-rapidapi-host': process.env.React_APP_API_RAPID_HOST
                      }
                    try {
                        const {data} = await axios.get(`${process.env.React_APP_API_URL}title/get-videos`, {
                            headers,
                            params: {tconst: id, limit: '25', region: 'US'},
                        })
                        
                    } catch (error) {
                        if(error.request.status === 0){
                                toast('Network Error')
                                console.error(error)
                              }
                    }
                }
            })
        }
    }, [oneMovie, match.params.id])
    const headers = {
        'x-rapidapi-key': process.env.React_APP_API_RAPID_API,
        'x-rapidapi-host': process.env.React_APP_API_RAPID_HOST
      }
    const handleClick = async (vid)=>{
        if(vid && vid.trim().length > 0){
            try {
                const {data} = await axios.get(`${process.env.React_APP_API_URL}/title/get-video-playback`, {
                    headers,
                    params:{viconst: vid, region: 'US'}
                })
                console.log(data)
                setVideo(data)
                localStorage.setItem('video', JSON.stringify(data))
                history.push('/watch-preview')
            } catch (error) {
                if(error.request.status === 0){
                    toast('Network Error, check your connection')
                }
            }
            
        }else{
            toast('Cannot play video at the moment')
        }
    }
    return (<>
        {(oneMovie &&  oneMovie.length > 0) && oneMovie.map(mov=>(
            <div key={mov.id} className="movie__card--one">
                <img className="movie__image--one" src={mov.i ? mov.i.imageUrl : alternative} alt={mov.l} />
                <div className="movies__details--one">
                        <h2>{mov.l && mov.l.length ? mov.l : mov.q}</h2>
                        <h5>Actors: {mov.s}</h5>
                        <p>Year of Production: {mov.y ? mov.y : mov.yr }</p>
                        <span>Rank: {mov.rank}</span>
                    {(mov.v && Object.keys(mov.v)) && <button onClick={()=>handleClick(movieID ? movieID: '')} className="movies__watch">Watch</button>}
                </div> 
            </div>
        ))}
        <RelatedMovies id={match.params.id} /> 
    </>)
}

export default SingleMovie
