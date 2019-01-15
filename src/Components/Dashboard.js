import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { deleteAction } from '../actions/todoActions'
import {firestoreConnect} from 'react-redux-firebase'
import { compose} from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
  render() {
    if(!this.props.auth.uid) return <Redirect to='/signin' />
    return (
      <div className="dashboard container">
          <div className="row">
            <div className="col s12 m7">
              <Todos todos={this.props.todos} deleteTodo={this.props.deleteTodo} update={this.update} /><br/>
              <AddTodo />
            </div>
            <div className="col s12 m4 offset-m1">
              <SideBar history={this.props.history}/>
            </div>
          </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    todos: state.firestore.ordered.Todos,
    history: state.firestore.ordered.History,
    auth: state.firebase.auth
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
    { collection: 'Todos'},
    { collection: 'History', limit:4, orderBy: ['time', 'desc']}
  ])
)(Dashboard);
