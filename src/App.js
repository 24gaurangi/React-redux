import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'
import SideBar from './SideBar'
import { connect } from 'react-redux'

class App extends Component {
  update = (content) => {
    content? this.content = content: this.content = ''
    }

  render() {
    return (
      <div className="App container">
        <div className="container center green-text">
          <h2> Task Manager</h2>
        </div>
        <hr/>
        <br/>
        <div className="row">
          <div className="col s7">
            <Todos todos={this.props.todos} deleteTodo={this.props.deleteTodo} update={this.update} /><br/>
            <AddTodo></AddTodo>
          </div>
          <div className="col s4 offset-s1">
            <SideBar deleteHistory={this.content}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo : (id) => { dispatch({ type: "Delete_Todo", id: id})}
    }
  }


export default connect(mapStatetoProps, mapDispatchToProps)(App);
