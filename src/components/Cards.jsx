import React from 'react'
import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom'
const Cards = ({movie}) => {
  return (
    <div>
     <Link to={`/movies/${movie.id}`}>
           <Card
          className="max-w-sm"
          imgAlt=""
          imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          
           >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {
               movie.original_title
            }
          </h5>
          <div className='flex items-center justify-center'>
              <p className="font-normal text-gray-700 dark:text-gray-400">
            Release Date  {
             movie.release_date
           }
          </p>
          <p className=' p-2 rounded-lg text-white bg-gray-500'>
            Popularity  {
              parseInt(movie.popularity) /100
            }
          </p>
          </div>
        
        </Card>
        </Link>
    </div>
  )
}

export default Cards
