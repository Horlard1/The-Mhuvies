import React, { useContext, useEffect, useState } from 'react'
import { movieContest } from '../../context/moviesContext'
import alternative from '../../asset/not-found.png'
import axios from 'axios'
import { toast } from 'react-toastify'
import { videoContext } from '../../context/videoContext'
import RelatedMovies from './relatedMovies'
import { userContext } from '../../context/userContext'
import { listContext } from '../../context/listContext'
import { findNums } from '../../function/helper'


const SingleMovie = ({match, history}) => {
    const [oneMovie, setOneMovie] = useState(null)
    const [movies] = useContext(movieContest)
    const [list, setList] = useContext(listContext)
    const [movieID, setMovieId] = useState('')
    const [, setVideo] = useContext(videoContext)
    const [user] = useContext(userContext)
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
                    const trailer = v.map(item=> item.s.split(":")
                    .join(''))
                    .reduce((maxI, items, i, v) => items > v[maxI] ? i : maxI, 0)
                    setMovieId(v[trailer].id)
                }
                else{
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
                        console.log(data)
                        const {videos} = data.resource
                        if(typeof videos  === 'object' && videos.length > 0){
                            const selectedObject = videos[videos.map(items=> items.contentType === 'Trailer' && items.durationInSeconds).reduce((maxI, items, i, v) => items > v[maxI] ? i : maxI, 0)];
                            const initialId = findNums(selectedObject.id)
                            if(initialId[0] === true){
                                const mainId = `vi${initialId[1].slice(1)}`

                                setMovieId(mainId)
                            }
                        }
                    } catch (error) {
                        console.error(error)
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
    const addToList =(movieItem)=>{
        if(user && typeof user === 'string' && user.trim().length > 0){
           if(list.length < 1){
               setList([...list, movieItem])
           }else{
                let sameMovie = list.filter(i=> i.id === movieItem.id)
                if(sameMovie && sameMovie.length > 0){
                    toast('Movie already listed')
                }else{
                    let newList = [...list, movieItem]
                    setList(newList)
                }
           }
        }else{
            history.push('/login')
            toast('Kindly login to continue')
        }
    }
    return (<>
        {(oneMovie &&  oneMovie.length > 0) && oneMovie.map(mov=>(
            <div key={mov.id} className="movie__card--one">
                <img className="movie__image--one" src={mov.i ? mov.i.imageUrl : alternative} alt={mov.l} />
                <div className="movies__details--one">
                        <h2>{mov.l && mov.l.length ? mov.l : mov.q}</h2>
                        <h5>Main Actors: {mov.s}</h5>
                        <p>Released in year: {mov.y ? mov.y : mov.yr }</p>
                        <span>Rank: {mov.rank}</span>
                        <button className="movies__list" onClick={()=> addToList(mov)}>Add to Watchlist <i className="fas fa-plus-circle"></i></button>
                    {((mov.v && Object.keys(mov.v)) || movieID )&& <button onClick={()=>handleClick(movieID ? movieID: '')} className="movies__watch">Watch Preview <i className="fas fa-play"></i></button>}
                </div> 
            </div>
        ))}
        <RelatedMovies id={match.params.id} /> 
    </>)
}

export default SingleMovie
