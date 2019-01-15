import React from 'react';


const Todos = ({todos, deleteTodo, update}) => {
  console.log(todos)
  const todoList = todos ? (todos.map(todo => {
    return(
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <div className="btn-flat waves-effect red-text lighten-5 right" onClick = {() => {deleteTodo(todo.id)} }>X</div>
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
