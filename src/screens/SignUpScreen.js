import React, { useRef } from 'react'
import "./SignUpScreen.css"
import { auth } from "../firebase"
import HomeScreen from './HomeScreen'
// import { useState } from 'react'

export default function SignUpScreen() {
  const emailref = useRef(null)
  const passwordref = useRef(null)

  const register = (e) => {
    e.preventDefault()

    auth.createUserWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    ).then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message)
    } )
  }

  const SignIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    ).then((authUser) => {
      return <HomeScreen/>
      // console.log(authUser);
    })
    .catch((error) => {
      alert(error.message)
    } )
  }
  return (
    <div className='SignUpScreen'>
      <form>
      <h1>Sign In</h1>
      <input ref={emailref} type='email' className='' placeholder='email id' />
      <input ref = {passwordref} type='password' className='' placeholder='password' />
      <button onClick={SignIn} type='submit' >Sign In</button>
      <h4>
        <span className='span'>New to Netflix ? </span>
        <span onClick={register} className='span2'>Sign Up now</span>
        </h4>
      </form>
    </div>
  )
  }


  


