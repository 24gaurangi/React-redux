const initState = {
  todos : [
    // { id: 1, content:"Do homework"},
    // { id: 2, content:"In root"},
    // { id: 3, content:"Do laundry"}
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type ==="Delete_Todo") {
    let updatedTodos = state.todos.filter(todo => {
      return action.id !== todo.id
    });
    return {
      ...state,
      todos: updatedTodos
    }
  }
  if (action.type ==="Add_Todo") {
    let id = Math.random()
    return {
      ...state,
      todos: [...state.todos, {content:action.content, id: id}]
    }
  }

  return state;
}

export default rootReducer
