import React from 'react';
import {NavLink} from 'react-router-dom'


const SignedOut = () => {
  return(
    <ul className="right">
      <li><NavLink to="/signin" className="black-text"> Login </NavLink></li>
      <li><NavLink to="/signup" className="black-text"> Sign Up </NavLink></li>
    </ul>
    )
  }




export default SignedOut
