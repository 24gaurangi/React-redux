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
          <div>
          <span><input type="text" className="task" ref={(input) => this.textInput = input} placeholder="Add new Task" required /></span>
          <span className="btn-floating btn deep-purple lighten-2 text-white pulse right tooltipped" data-tooltip="I am a tooltip" onClick={this.handleSubmit}>
            <i className=" material-icons">add</i>
          </span>
          </div>


        </form>

      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo : (content, user, completed) => { dispatch(addAction(content, user))  }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);
