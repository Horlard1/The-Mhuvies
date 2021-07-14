import React, { useContext, useEffect } from 'react'
import './form.css'
import axios from 'axios'
import { movieContest } from '../../context/moviesContext'
import { toast } from "react-toastify";

const Form = () => {
    const  [movies, setMovies] = useContext(movieContest)
    const headers = {
        'x-rapidapi-key': process.env.React_APP_API_RAPID_API,
        'x-rapidapi-host': process.env.React_APP_API_RAPID_HOST
      }
      const handleSubmit = async (params)=>{
          if(params.length > 3){
              try {
                const {data} = await axios.get(`${process.env.React_APP_API_URL}auto-complete`, {
                    headers,
                    params: {q: `${params}`},
                })
                setMovies(data.d)
                localStorage.setItem("movies", JSON.stringify(data.d))
              } catch (error) {
                  if(error.request.status === 0){
                    toast('Network Error')
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
                    <input type="text" onChange={(e)=>handleSubmit} placeholder="Search for movies" autoComplete= "off" />
                </div>
            </form>
        </div>
    )
}

export default Form
