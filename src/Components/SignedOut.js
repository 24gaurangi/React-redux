import React from 'react';
import {NavLink} from 'react-router-dom'


const SignedOut = () => {
  return(
    <ul className="right">
      <li><NavLink to="/signin" className="white-text"> <h5>Login</h5> </NavLink></li>
      <li><NavLink to="/signup" className="white-text"> <h5>Sign Up </h5></NavLink></li>
    </ul>
    )
  }




export default SignedOut
