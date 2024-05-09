import React from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cards from './Cards';
const Movie = () => {
  let movies = [];
  movies = useSelector((state) => state.movieData.movies)
  
  return (
    <div className='container mx-auto mt-6'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
        {
          movies.length > 0 ?
            movies.map((movie) => <Cards key={movie.id} movie={movie} />)
            :
            <h1>Loading</h1>
        }
      
    </div>
    </div>
  )
}

export default Movie
