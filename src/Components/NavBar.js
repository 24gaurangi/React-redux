import React from 'react';
import {Link} from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { connect } from 'react-redux';

const NavBar = (props) => {
  const authlinks = props.auth.uid? <SignedIn /> : <SignedOut />

  return(
    <div className="navbar-fixed transparent">
      <nav className="nav-wrapper teal lighten-2 ">
        <div className="container">
          <Link to="/" className="brand-logo black-text"> Task Manager </Link>
          { authlinks }
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
