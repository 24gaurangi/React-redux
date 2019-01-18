import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAction } from '../actions/todoActions'

class AddTodo extends Component {
  // componentDidMount(){
  //   console.log("Component did mount", this.textInput.value)
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.textInput.value, this.props.user)
    this.textInput.value = ''
  }

  render(){
    return(
        <form onSubmit={this.handleSubmit}>
          <label><h5 className='deep-purple-text text-lighten-1'>Add new Task</h5></label>
          <input type="text" id="task"  ref={(input) => this.textInput = input} required /><button className="btn deep-purple lighten-1 z-depth-0">Add</button>
        </form>

      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo : (content, user) => { dispatch(addAction(content, user))  }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);
