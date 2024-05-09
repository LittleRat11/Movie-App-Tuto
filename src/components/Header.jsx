import React, { useState } from 'react'
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import { api, apiKey } from '../api';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/actions/movies';
const Header = () => {
  const [name, setName] = useState('')
  const dispatch =useDispatch()
  const handleSubmit =async (e) => {
    e.preventDefault()
    if (name !== "") {
      const res = await api.get(`/search/movie?api_key=${apiKey}&query=${name}`)
      dispatch(fetchMovies(res.data.results));
    } else {
      const res = await api.get(`/discover/movie?language=en-US&sort_by=popularity.desc&api_key=${apiKey}`)
      dispatch(fetchMovies( res.data.results)) 
    }
  }
  return (
    <Navbar fluid rounded>
     
        <Link to='/'>
             <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Movie App</span>
        </Link>
       
      <form onSubmit={handleSubmit} className='flex items-center justify-center gap-2'>
        <TextInput id="small"
          type="text"
          sizing="md"
          placeholder="Search by movie name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit' className='p-2 rounded-lg text-white bg-amber-500'>Search</button>
        </form>
      
      <Navbar.Collapse>
       
       
      </Navbar.Collapse>
    </Navbar>

   
  )
}

export default Header
