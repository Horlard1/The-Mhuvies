import React, { useContext, useEffect, useState } from 'react'
import { movieContest } from '../../context/moviesContext'
import { findNums } from '../../function/helper'
import alternative from '../../asset/not-found.png'
import axios from 'axios'
import { toast } from 'react-toastify'
import { videoContext } from '../../context/videoContext'

const SingleMovie = ({match, history}) => {
    const [oneMovie, setOneMovie] = useState(null)
    const [movies] = useContext(movieContest)
    // const [movieID, setMovieId] = useState('')
    const [video, setVideo] = useContext(videoContext)
    useEffect(()=>{
        const id = match.params.id
        const movie = movies.filter(mov=> mov.id === id)
        setOneMovie(movie)
    }, [movies, match.params.id])

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
                console.error(error)
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
                        <p>Year of Production: {mov.yr ? mov.yr : mov.y }</p>
                        <span>Rank: {mov.rank}</span>
                    {(mov.v && Object.keys(mov.v)) && <button onClick={()=>handleClick('vi1015463705')} className="movies__watch">Watch</button>}
                </div> 
            </div>
        ))}
        
    </>)
}

export default SingleMovie
