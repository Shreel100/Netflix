import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Nav.css"
import { Link } from 'react-router-dom';


function Nav() {
const [show, handleShow] = useState(false)

const navigate = useNavigate();

const transitionNavBar = () => {
  if(window.scrollY > 100){
    handleShow(true)
  }else{
    handleShow(false)
  }
}

useEffect(() => {
  window.addEventListener('scroll', transitionNavBar)
  return () => window.removeEventListener('scroll', transitionNavBar)
}, [])

// const links = [
//   {name: 'Home', link: '/'},
//   {name:'Tv Shows', link: '/'},
//   {name:'Movies', link: '/'},
//   {name:'My List', link: '/mylist'}
// ]

  return (
    <div className={`nav ${show && 'nav_black'}`}>

      <div className='nav_content'>
      <img 
      onClick={() => navigate('/')}
      className='nav_logo'
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
      alt=''/>

      {/* <ul className='nav-options' >
        {links.map(({name, link}) => {
          return(
            <li key={name}>
              <Link to={link}>{name}</Link>
            </li>
          )
        })}
      </ul> */}

      <img 
      onClick={() => navigate('/profile')}
      className='nav_avatar_logo'
      src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
      alt=''
      />
      </div>
      
    </div>
  )
}

export default Nav
