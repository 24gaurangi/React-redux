import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { signUp } from '../actions/authActions'

class Signup extends Component {
  // componentDidMount(){
  //   console.log("Component did mount", this.textInput.value)
  // }
  state = {
    email : '',
    password : '',
    firstName: '',
    lastName: ''
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
    console.log(this.state)
    this.props.signUp(this.state)
    }

  render(){
    if(this.props.auth.uid) return <Redirect to='/' />
    return(

      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="black-text">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName"  onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName"  onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Password</label>
            <input type="password" id="password"  onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink z-depth-0">Sign Up</button>
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
    signUp : (user) => { dispatch(signUp(user))}
    }
  }
export default connect(mapStatetoProps, mapDispatchToProps)(Signup);
