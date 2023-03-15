import React from 'react'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import "./HomeScreen.css"
import requests from '../requests'
import Row from '../components/Row'

function HomeScreen() {
  return (
    <div className='Home'>
      <Nav />
      <Banner />
      <Row title="Trending now" fetchURL={requests.fetchTrending} isLargeRow/>
      <Row title="Top Rated" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Netflix Originals" fetchURL={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchURL={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
      {/* <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} /> */}
      <Row title= 'Documentries' fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
