import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { deleteAction } from '../actions/todoActions'
import {firestoreConnect} from 'react-redux-firebase'
import { compose} from 'redux'


class Dashboard extends Component {
  update = (content) => {
    content? this.content = content: this.content = ''
    }

  render() {
    return (
      <div className="dashboard container">
          <div className="row">
            <div className="col s12 m7">
              <Todos todos={this.props.todos} deleteTodo={this.props.deleteTodo} update={this.update} /><br/>
              <AddTodo />
            </div>
            <div className="col s12 m4 offset-m1">
              <SideBar deleteHistory={this.content}/>
            </div>
          </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    todos: state.firestore.ordered.Todos
}
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo : (id) => { dispatch(deleteAction(id))}
    }
  }


export default compose(
  connect(mapStatetoProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'Todos'}
  ])
)(Dashboard);