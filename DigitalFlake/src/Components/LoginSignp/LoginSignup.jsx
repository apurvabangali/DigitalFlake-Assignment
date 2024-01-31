import React, {Component} from 'react'
import './LoginSignup.css'
import '../Dashboard/Home.jsx'


import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import Symbol from '../assets/Symbol.png'

const LoginSignup = () => {
  
  return (
    <div className='bg'>
    <div className='container'>
       <div className='header'>
       <img src={Symbol} alt="" className='symbol'/>
       <div className='text'> Welcome to digitalflake admin</div>   
       </div>

      <div className='inputs'>
      <div className='input'>
        <img src={email_icon} alt="" />
        <input type="email" placeholder='Email' required/>
      </div>
      <div className='input'>
        <img src={password_icon} alt="" />
        <input type="password"  placeholder=' Password' required/>
      </div>
      </div> 
      <div className='submit-container'> 
      <div className='submit'>
        <a href='/Home' id="link">
        <button>Login</button>
       </a> 
     </div>
      </div>
         
    </div>
    </div>

    
  )
}

export default LoginSignup
