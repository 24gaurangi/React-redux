import React from 'react';


const Todos = ({todos, deleteTodo, update}) => {
  console.log(todos)
  const todoList = todos.length ? (todos.map(todo => {
    return(
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <i className="material-icons red-text text-accent-2 right"
          onClick = {() => {deleteTodo(todo.id); update(todo.content)} }>done</i>
      </div>
    )
  })) : (<p className=" center">You have no items left! </p>)

  return(
      <div className="todos collection with-header">
        <div className="collection-header blue-text"><h5>Pending Items</h5></div>
        {todoList}
      </div>
  )
}
export default Todos
