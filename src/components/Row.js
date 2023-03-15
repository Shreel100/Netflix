import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../axios'

function Row({title,fetchURL, isLargeRow = false }) {
 
const [movies, setMovies] = useState([])

const base_URL = 'https://image.tmdb.org/t/p/original/'

useEffect(() => {
    async function fetchData(){
        const request = await axios.get(fetchURL)
        setMovies(request.data.results )
        return request
    }
        fetchData()
},[fetchURL])

console.log(movies)

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
        {movies && movies.map((poster) => (
            <img 
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={poster.id}
            src={`${base_URL}${poster.backdrop_path}`} 
            alt={poster.name}/>
        ))}
    </div>
    </div>
  )
}

export default Row
