import React from 'react';


const Todos = ({todos, deleteTodo, completeTodo}) => {

  const todoList = todos ? (todos.map(todo => {
    var flag = todo.completed? <i className="material-icons green-text">check</i>: ''
    return(
        <div className="collection-item" key={todo.id}>
          <span className="todo" onClick = {() => {completeTodo(todo.id)} }>{todo.content}</span>
          <span className="btn-floating btn-small red lighten-2 text-white right tooltipped" data-tooltip="I am a tooltip" onClick = {() => {deleteTodo(todo.id)} }>
            <i className=" material-icons">remove</i>
          </span>
          <span className="red-text right" >
            {flag}
          </span>


        </div>
    )
  })) : (<p className=" center">You have no items left! </p>)

  return(
      <div className="todos collection ">
        {todoList}
      </div>
  )
}
export default Todos
