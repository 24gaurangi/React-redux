import React from 'react';
import {Link} from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { connect } from 'react-redux';

const NavBar = (props) => {
  const authlinks = props.auth.uid? <SignedIn /> : <SignedOut />

  return(
    <div className="navbar-fixed ">
    <nav className="transparentBG z-depth-2">
    <div className="nav-wrapper">
    <div className="container">
    <Link to="/" className="brand-logo left "> Task Manager </Link>
          { authlinks }
      </div>
    </div>
    </nav>
    </div>

    )
  }

  const mapStatetoProps = (state) => {
        return {
    auth: state.firebase.auth
  };

  }

export default connect(mapStatetoProps)(NavBar)
