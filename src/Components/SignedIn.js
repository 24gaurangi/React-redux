import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../actions/authActions'

const SignedIn = (props) => {
  return(
    <ul className="right">
      <li><NavLink to="/" className="black-text "> Analytics </NavLink></li>
      <li><a href="/" onClick={props.signOut} className="black-text"> Sign Out </a></li>
      <li><NavLink to="/" className="btn btn-floating deep-purple lighten-1 white-text"> {props.profile.initials} </NavLink></li>
    </ul>
    )
  }

  const mapStatetoProps = (state) => {
    return {
      auth: state.firebase.auth,
      authError: state.auth.authError,
      profile: state.firebase.profile
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      signOut : () => { dispatch(signOut())}
      }
    }

export default connect(mapStatetoProps, mapDispatchToProps)(SignedIn);
