import React from 'react'
import CardSlider from './CardSlider'
import requests from '../requests'

export default function Slider() {

  return (
    <div className='Row'>
      <CardSlider title = 'Top Rated' fetchURL={requests.fetchTopRated} />
      <CardSlider title = 'Action Movies' fetchURL={requests.fetchActionMovies} />
      <CardSlider title = 'Horror Movies' fetchURL={requests.fetchHorrorMovies} />
      <CardSlider  title = 'Comedy Movies' fetchURL={requests.fetchComedyMovies} />
      <CardSlider title = 'Documentries' fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}
