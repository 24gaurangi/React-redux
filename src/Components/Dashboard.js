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

    const todos = this.props.todos
    const usertodos = todos && todos.filter(todo => {
      return todo.user===this.props.auth.uid
    })
    const history = this.props.history
    const userhistory = history && history.filter(history => {
      return history.user===this.props.auth.uid
    })
    return (
      <div className="dashboard container">
          <div className="row">
            <div className="col s12 m7">
            <div className="card">

              <div className="card-content black-text">
                <span className="card-title deep-purple-text text-lighten-1"><h5>Pending Items</h5></span><br/>
                <Todos todos={usertodos} deleteTodo={this.props.deleteTodo} update={this.update} />
              </div>
              <div className="card-action">
                <AddTodo user={this.props.auth.uid}/>
              </div>

            </div>
            </div>
            <div className="col s12 m4 offset-m1 right">
            <div className="card ">
              <div className="card-content black-text">
                <span className="card-title deep-purple-text text-lighten-1"><h5>History</h5></span><hr/><br/>
                <SideBar history={userhistory}/>
              </div>
            </div>
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
