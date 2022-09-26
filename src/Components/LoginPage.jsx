import React from 'react'
import '../css/LogginPage.css';
import { useState } from 'react';




function LoginPage() {

  
const [show,setshow] = useState(false);
const handleShow = () => {
    setshow(!show);
}

let toggleclass = show?' fa-eye': 'fa-eye-slash';

  return (
    <>
        <div className="container">
            <form action="">
                <i className="far fa-user  profile-icon"></i>
                 <input type="eamil" placeholder = "Enter your email" className='box ' />
                 <div className="password-container">
                 <input type= {show?"text":"password"} placeholder = "Enter your password" className='box' />
                 <i className={`fa-solid  ${toggleclass}`}   aria-hidden="true" onClick={handleShow}></i>
                 </div>
                 <input type="submit"  value = "login"/> 
                 <p>don't have an account <a href="/">sign up</a></p>
                 <p>forget password? <a href="/">click here</a></p> 
            </form>
        </div>
    </>
  )
}

export default LoginPage