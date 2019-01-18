import React from 'react';
import {NavLink} from 'react-router-dom'


const SignedOut = () => {
  return(
    <ul className="right">
    
      <li><NavLink to="/signup" className="white-text deep-purple lighten-1 btn">Sign Up</NavLink></li>
    </ul>
    )
  }




export default SignedOut
