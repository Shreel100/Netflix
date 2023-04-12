import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BsCheck } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { requestTrailer } from '../requests';
import './Card.css'

export default function Card({ movieData, isLiked = false }) {
  const base_URL = 'https://image.tmdb.org/t/p/original/';
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [trilerLink, setTrailerLink] = useState(null)

  const handleHover = () => {
    setHoverTimeout(setTimeout(() => setIsHovered(true), 500));
  };

 const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setIsHovered(false);
  };

  const openTrailer = () => {
    window.open(trilerLink, '_blank')
  }

  useEffect(() => {
    const fetchTrailerUrl = async () => {
      const query = `${movieData.title} official trailer`;
      const response = await fetch(requestTrailer?.searchOnYoutube(encodeURIComponent(query)));
      const data = await response.json();
      const videoId = data.items[0].id.videoId;
      setTrailerLink(`https://www.youtube.com/watch?v=${videoId}`)
      setTrailerUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1`);
    };
    if (isHovered) {
      fetchTrailerUrl();
    } else {
      setTrailerUrl(null);
    }
  }, [isHovered]);
  

  return (
    <Container onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
      <img className='poster' src={`${base_URL}${movieData.poster_path}`} alt="card" />

      {isHovered && (

        <div className="hover">
          <div className="image-video-container">

            {trailerUrl && (
              <iframe
                width="290px"
                height="150px"
                src={trailerUrl}
                className='iframe'
              />
              )}

          </div>

          <div className="info-container flex column">
            <h3 className="name" >
              {movieData.title}
            </h3>
            <div className="icons flex j-between">
              
              <div className="controls flex">
                <IoPlayCircleSharp title="Play" onClick = {() => openTrailer()}  />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {isLiked ? <BsCheck title="Remove from List" /> : <AiOutlinePlus title="Add to my list" />}
              </div>
            </div>
            <div className='description-container'>
                <p className='description'>{movieData.overview}</p>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  max-width: 275px;
  width: 275px;
  height: 100%;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 18rem;
    position: absolute;
    top: -2vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 1.5s ease-in-out;
    .image-video-container {
      position: relative;
      height: 140px;
      z-index:1;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      .iframe{
        border:none;
      }
      video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 10rem;
    }.name{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
        margin-top:8px;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 1.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .description-container{
      .description{
        color: gray;
        margin-top: 8px;
      }
    }
  }
`;

