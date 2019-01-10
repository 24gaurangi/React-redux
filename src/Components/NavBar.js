import React from 'react';
import {Link} from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { connect } from 'react-redux';

const NavBar = () => {
  return(
    <div className="navbar-fixed transparent">
      <nav className="nav-wrapper teal lighten-2 ">
        <div className="container">
          <Link to="/" className="brand-logo black-text"> Task Manager </Link>
          <SignedIn />
          <SignedOut />
        </div>
      </nav>
    </div>
    )
  }

  const mapStatetoProps = (state) => {
    console.log(state)
    
    return state;

  }

export default connect(mapStatetoProps)(NavBar)
