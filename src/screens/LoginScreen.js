import React, { useState } from 'react'
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen'

function LoginScreen() {

  const[SignIn, setSignIn] = useState(false)

  return (
    <div className='loginscreen'>
        <div className='loginscreen_background'>
            <img className='loginscreen_logo'
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
            alt='' />
            <button 
            onClick={() => setSignIn(true)}
            className='SignIn_button'>
              Sign In
            </button>
            <div className='loginscreen_gradient'/>              
        </div>
            <div className='loginscreen_body'>
              {SignIn ? (
                <SignUpScreen /> 
              ) : (
                <>
                <h1>Unlimited films,TV Programes and more !</h1>
                <h2>Watch anywhere, Cancel at anytime</h2>
                <p>Ready to watch ? Enter your email to create or restart your membership</p>
                <div className='loginscreen_input'>
                  <form>
                  <input type='email' placeholder='Email Address' />
                  <button
                  onClick={() => setSignIn(true)}
                  className='login_button' title='Get Started'>Get Stated</button>
                  </form>
                </div>
                </>
              )}
            </div>
    </div>
  )
}

export default LoginScreen

