import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../axios'
import requests from '../requests'
import { requestTrailer } from '../requests'

function Banner({movieData}) {

  const [movie,setMovie] = useState()

  const [click, setClick] = useState(false)

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchTrending)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length-1)
        ]
      )
     return request 
    }
    fetchData()
  },[])

  useEffect(() => {
    const fetchTrailerUrl = async () => {
      const query = `${movie?.title || movie?.name || movie?.original_name} official trailer`;
      const response = await fetch(requestTrailer?.searchOnYoutube(encodeURIComponent(query)));
      const data = await response.json();
      const videoId = data.items[0].id.videoId;
      const openTrailer = () => {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
      }
      if(click) {
        openTrailer()
      }
    };
    fetchTrailerUrl()
  }, [movie, click]);

  return (
    <div>
      <div
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
      >
        <div>
        <h1 className='banner_title'>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className='banner_buttons'>
          <button className='banner_button' onClick={() => setClick(true)}>Play</button>
        </div>
        <h1 className='banner_description'>
          {movie?.overview}</h1>
      </div>
      <div className='banner--fadeBottom' />
      </div>
      </div>
  )
}

export default Banner
