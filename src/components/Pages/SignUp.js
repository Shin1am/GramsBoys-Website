import React, { useState } from 'react';
import { Button } from '../util/Button';
import '../css/SIgnUp-Login.css'
import SignUpPicture from '../Assets/Sign-up-picture.png';


function SignUp() {


  return (
    <>
      <div className='sign-up-page-container'>
        <img src={SignUpPicture} alt='sign-up' style= {{width: '90vh', height: 'auto'}}/>
        <div className='sign-up-section-container'>
          <div className='header-text'>
            <h2>Sign Up</h2>
          </div>
          <div className='input-container'>  
            <div className='input'>
              <p>Username</p>
              <input type='text' placeholder='Enter your username' /> 
            </div>
            <div className='input'>
              <p>Email</p>
              <input type='text' placeholder='Enter your email' /> 
            </div>
            <div className='input'>
              <p>Password</p>
              <input type='text' placeholder='Enter your password' /> 
            </div>
            <div className='input'>
              <p>Confirm password</p>
              <input type='text' placeholder='Confirm your password' /> 
            </div>
          </div>
          <div className='sign-up-button'>
            <Button buttonStyle='btn--outline' buttonSize='btn--medium--long' path='/'>Sign Up</Button>
          </div>
          <div className='sign-up-footer-text'>
            <p> Already have account? <a href="/log-in">Login</a> </p>
          </div>
        </div>
      </div>  
    </>
  )
}

export default SignUp