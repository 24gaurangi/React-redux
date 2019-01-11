import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../actions/authActions'
import { Redirect } from 'react-router-dom'

class Signin extends Component {
  // componentDidMount(){
  //   console.log("Component did mount", this.textInput.value)
  // }

  state = {
    email : '',
    password : ''
  }
  handleChange = (e) => {
    this.setState(
      {
        [e.target.id]: e.target.value
      }
    )
    }
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.textInput.value)
    this.props.signIn(this.state)
    }

  render(){
    if(this.props.auth.uid) return <Redirect to='/' />
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="black-text">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Password</label>
            <input type="password" id="password"  onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink z-depth-0">Login</button>
          </div>
        </form>
      </div>
      )
    }
}
const mapStatetoProps = (state) => {
  return {
    auth: state.firebase.auth
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn : (creds) => { dispatch(signIn(creds))}
    }
  }


export default connect(mapStatetoProps, mapDispatchToProps)(Signin);
