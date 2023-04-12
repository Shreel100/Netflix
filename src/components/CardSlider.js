import React, { useRef } from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'
import axios from '../axios'
import './CardSlider.css'
import styled from 'styled-components'


export default function CardSlider({fetchURL,title}) {

  const [showControls, setShowControls] = useState(false);

  const listRef = useRef()
  
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchURL])

  return (
    <Container 
    className="container"
    onMouseEnter={() => setShowControls(true)}
    onMouseLeave={() => setShowControls(false)}
    >
    <div>
    <h1 className='title'>{title}</h1>
    </div>
    <div className='mapping'>
    <div className='slider flex' ref={listRef}>
      {movies &&
        movies?.map((movie,index)=>{
          return <Card className = 'Card'
          movieData={movie} index = {index} key={movie.id}/>
        })
        }
    </div>
    </div>
    </Container>
  )
}

const Container = styled.div`
  gap: 2rem;
  position: relative;
  padding: 0.5rem 0;
  h1 {
    margin-left: 50px;
  }

  .slider {
      width: max-content;
      gap: 20px;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 50%;
      top: 50%;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;
