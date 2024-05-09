import React, { useEffect } from 'react'
import { Card } from "flowbite-react";
import { useParams } from 'react-router';
import { api, apiKey } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedMovie, selectedMovie } from '../redux/actions/movies';
const Detail = () => {
    const { movieId } = useParams()
    const dispatch = useDispatch()
    const fetchMovies = async () => {
        const res =await  api.get(`/movie/${movieId}?api_key=${apiKey}`)
        if (res.data) {
            dispatch(selectedMovie(res.data))
        }
    }
    let movie = {}
    movie = useSelector((state) => state.movieData.movie)
    useEffect(() => {
        if (movieId) {
          fetchMovies()
        }
        return () => dispatch(removeSelectedMovie({}))
    },[movieId])
  return (
      <div className='container mx-auto'>
          {
              JSON.stringify(movie) === '{}' ?
                  <div>Loading...</div>
                  :
              <Card
            className="max-w-md mx-auto" 
            imgAlt=""
            imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {
                movie.original_title
             }
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                          {
                              movie.overview
             }
             </p>
            <div className='flex justify-around items-center gap-2'>
                          <p className='font-normal text-gray-700 dark:text-gray-400'>
                              Runtime {
                                  `${movie.runtime} Min`
                              }
                          </p>            
                 <p className='font-normal text-gray-700 dark:text-gray-400'>
                              Vote Count {
                                  `${movie.vote_count}`
                              }
                </p>                        
            </div>
          </Card>
          }
      
    </div>
  )
}

export default Detail
