import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAction } from '../actions/todoActions'

class AddTodo extends Component {
  // componentDidMount(){
  //   console.log("Component did mount", this.textInput.value)
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.textInput.value)
    this.props.addTodo(this.textInput.value)
    this.textInput.value = ''
    }

  render(){
    return(
      <div className="container left ">
        <form onSubmit={this.handleSubmit}>
          <label className="blue-text"><h5>Add new Task</h5></label>
          <input type="text" id="task"  ref={(input) => this.textInput = input} />
        </form>
      </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo : (content) => { dispatch(addAction(content))  }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);