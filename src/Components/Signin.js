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
        <div className="row">
        <div className="col s12 m4 offset-m4">
        <div className="card">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="card-content black-text">
            <span className="card-title deep-purple-text"><h5>Sign In</h5></span>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email"  onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="email">Password</label>
              <input type="password" id="password"  onChange={this.handleChange} />
            </div>
          </div>
          <div className="card-action">
          <div className="input-field center">
                <button className="btn deep-purple lighten-1  z-depth-0">Login</button>
              </div>

        </div>
          </form>
          <div className="red-text center">
            {this.props.authError}
          </div>
          <br/>
          </div>
        </div>
        </div>
      )
    }
}
const mapStatetoProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn : (creds) => { dispatch(signIn(creds))}
    }
  }


export default connect(mapStatetoProps, mapDispatchToProps)(Signin);
