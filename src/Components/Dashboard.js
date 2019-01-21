import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { deleteAction } from '../actions/todoActions'
import { completeAction } from '../actions/todoActions'
import {firestoreConnect} from 'react-redux-firebase'
import { compose} from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment';
import Calendar from 'react-calendar'
import M from 'materialize-css/dist/js/materialize.min.js'


class Dashboard extends Component {
  state = {
    date: new Date()
  }

  componentDidMount(){
   M.Tabs.init(this.tabs);
   M.Tooltip.init();
}
  handleChange = (date) => {
    this.setState({ date })
  }
  render() {
    if(!this.props.auth.uid) return <Redirect to='/signin' />

    const todos = this.props.todos

    const allusertodos = todos && todos.filter(todo => {
      const conv = todo.createTime ? todo.createTime.toDate() : ''
      console.log(todo.user===this.props.auth.uid && conv.toString().substr(0,15) === this.state.date.toString().substr(0,15))
      return (todo.user===this.props.auth.uid && conv.toString().substr(0,15) === this.state.date.toString().substr(0,15))
    })
    const doneusertodos = todos && todos.filter(todo => {
      const conv = todo.createTime ? todo.createTime.toDate() : ''
      return (todo.user===this.props.auth.uid && todo.completed === true && conv.toString().substr(0,15) === this.state.date.toString().substr(0,15))
    })
    const pendingusertodos = todos && todos.filter(todo => {
      const conv = todo.createTime ? todo.createTime.toDate() : ''
      return (todo.user===this.props.auth.uid && todo.completed === false && conv.toString().substr(0,15) === this.state.date.toString().substr(0,15))
    })
    const users = this.props.users
    const user = users && users.filter(user => {
      return user.id === this.props.auth.uid
    })
    const history = this.props.history
    const userhistory = history && history.filter(history => {
      return history.user===this.props.auth.uid
    })
    return (
      <div className="dashboard container">
          <div className="row">
          <div className="col s12 m3">
          <div className="card">
            <div className="card-content blue lighten-4 black-text">
              <Calendar className='z-depth-2' value={this.state.date} onChange={this.handleChange} ref={(calendar) => this.dateInput = calendar}/>
            </div>
          </div>
          </div>
            <div className="col s12 m6 ">
            <div className="card">

              <div className="card-content black-text">
                <span className="card-title deep-purple-text center text-lighten-1"><h5>{this.state.date.toString().substr(0,15)}</h5></span>

              </div>

              <div className="card-tabs">
                <ul className="tabs tabs-fixed-width" ref={ (tabs) => {this.tabs = tabs} }>
                  <li className="tab"><a className="active" href="#tab1">All </a></li>
                  <li className="tab"><a href="#tab2">Pending </a></li>
                  <li className="tab"><a href="#tab3">Done </a></li>
                </ul>
              </div>
              <div className="card-content grey lighten-4">
                <div id="tab1">
                  <Todos todos={allusertodos} deleteTodo={this.props.deleteTodo} completeTodo={this.props.completeTodo}  />
                </div>
                <div id="tab2">
                  <Todos todos={pendingusertodos} deleteTodo={this.props.deleteTodo} completeTodo={this.props.completeTodo}  />
                </div>
                <div id="tab3">
                  <Todos todos={doneusertodos} deleteTodo={this.props.deleteTodo} completeTodo={this.props.completeTodo}  />
                </div>
              </div>
              <div className="card-action">
                <AddTodo user={this.props.auth.uid}/>
              </div>

            </div>
            </div>
            <div className="col s12 m3 right">
            <div className="card ">
              <div className="card-content black-text">
              <div className="white">
                <span className="card-title deep-purple-text text-lighten-1"><h5>History</h5></span><hr/><br/>
                <SideBar history={userhistory}/>
                </div>
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
    users: state.firestore.ordered.Users,
    auth: state.firebase.auth
}
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo : (id) => { dispatch(deleteAction(id))},
    completeTodo : (id) => { dispatch(completeAction(id))}
    }
  }


export default compose(
  connect(mapStatetoProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'Todos'},
        { collection: 'Users'},
    { collection: 'History', limit:4, orderBy: ['time', 'desc']}

  ])
)(Dashboard);
