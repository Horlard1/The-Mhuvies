import React, { useContext, useEffect } from 'react'
import './form.css'
import axios from 'axios'
import { movieContest } from '../../context/moviesContext'
import { toast } from "react-toastify";

const Form = () => {
    const  [ , setMovies] = useContext(movieContest)
    const headers = {
        'x-rapidapi-key': process.env.React_APP_API_RAPID_API,
        'x-rapidapi-host': process.env.React_APP_API_RAPID_HOST
      }
      let cancelToken;
      const handleSubmit = async (params)=>{
          if(params.length > 3){
            if (typeof cancelToken !== 'undefined') {
                cancelToken.cancel("Operation canceled")
            }
                cancelToken = axios.CancelToken.source()
              try {
                const {data} = await axios.get(`${process.env.React_APP_API_URL}auto-complete`, {
                    headers,
                    params: {q: `${params}`},
                    cancelToken: cancelToken.token
                })
                setMovies(data.d)
                localStorage.setItem("movies", JSON.stringify(data.d))
              } catch (error) {
                  if(error.request.status === 0){
                    toast('Network Error')
                    console.error(error.request)
                  }
              }
              
          }
      }
      useEffect(()=>{
          setMovies(JSON.parse(localStorage.getItem('movies')))
      }, [setMovies])
      
    return (
        <div className="form__field">
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <div className="form__ctrl">
                    <i className="fas fa-search"></i>
                    <input type="text" onChange={(e)=>handleSubmit(e.target.value)} placeholder="Search for movies" autoComplete= "off" />
                </div>
            </form>
        </div>
    )
}

export default Form
