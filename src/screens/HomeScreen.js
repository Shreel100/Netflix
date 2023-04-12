import React from 'react'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import "./HomeScreen.css"
import Slider from '../components/Slider'


function HomeScreen() {



  return (
    <div className='Home'>
      <Nav />
      <Banner />
      <Slider/>
      {/* <Row title="Trending now" fetchURL={requests.fetchTrending} isLargeRow/> */}
      {/* <Row title="Top Rated" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Netflix Originals" fetchURL={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchURL={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
      <Row title= 'Documentries' fetchURL={requests.fetchDocumentaries} /> */}
    </div>
  )
}
export default HomeScreen
