import React, { useEffect } from 'react'
import Movie from './Movie'
import { useDispatch } from 'react-redux'
import { api, apiKey } from '../api'
import { fetchMovies } from '../redux/actions/movies'
const Home = () => {

  const dispatch = useDispatch()

  const getMovies = async () => {
    const res = await api.get(`/discover/movie?language=en-US&sort_by=popularity.desc&api_key=${apiKey}`)
  dispatch(fetchMovies( res.data.results))  
   
  }
  useEffect(() => {
    getMovies()
    
},[])
  return (
    <div>
      <Movie/>
    </div>
  )
}

export default Home
