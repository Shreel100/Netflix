import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import './Row.css'
import axios from '../axios'
import video from '../assets/video.mp4'

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([])
  const [isHover, setIsHover] = useState(false)
  const navigate = useNavigate()
  const base_URL = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchURL])

  console.log(movies)

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div
        className='row_posters'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {movies &&
          movies.map((poster) => (
              <img
                className={`row_poster`}
                src={`${base_URL}${poster.backdrop_path}`}
                alt={poster.name}
              />
          ))}

        <div className='wrapper'></div>
      </div>
    </div>
  )
}

export default Row
