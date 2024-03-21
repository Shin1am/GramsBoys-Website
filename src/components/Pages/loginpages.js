import React, { useState } from 'react';
import { Button } from '../util/Button';
import '../css/SIgnUp-Login.css'
import LoginPicture from '../Assets/Login-picture.png';

function loginpages() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');


  return (
    <>
    <div class="login-page-container">
      <div className='login-section-container'>
          <div className='login-header-text'>
            <h2>Login</h2>
          </div>
          <div className='input-container'>  
            <div className='input'>
              <p>Username</p>
              <input type='text' placeholder='Enter your username' /> 
            </div>
            <div className='input'>
              <p>Password</p>
              <input type='text' placeholder='Enter your password' /> 
            </div>
          </div>
          <div className='login-checkbox'>
            <input type='checkbox' /> 
            <label>Remember me</label>
            <a href='/'>Forgot Password?</a>
          </div>
          <div className='login-footer-section'>
            <div className='sign-up-button'>
              <Button buttonStyle='btn--outline' buttonSize='btn--medium--long' path='/'>Log In</Button>
            </div>
            <div className='login-footer-text'>
              <p> Doesn't have account yet? <a href="/sign-up"> Sign Up</a> </p>
            </div>
          </div>
      </div>
      <div className='login-picture-container'>
        <img src={LoginPicture} alt='sign-up' style= {{width: '90vh', height: 'auto'}}/>
      </div>
    </div>
    </>
    
      
 
  )
}
//faster bro im counting on you

//let login and signup my job dw

//im style sign up and login u do the backend job
export default loginpages