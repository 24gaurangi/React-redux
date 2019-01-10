const initState = {
  todos : [
    { id: 1, content:"Do homework"},
    { id: 2, content:"Redux"},
    { id: 3, content:"Do laundry"}
  ]
}

const rootReducer = (state = initState, action) => {
  switch(action.type){
    case "Delete_Todo":
    {
      let updatedTodos = state.todos.filter(todo => {
      return action.id !== todo.id
    });
    return {
      ...state,
      todos: updatedTodos
    }
  }
  case "Add_Todo":
  {
    let id = Math.random()
    return {
      ...state,
      todos: [...state.todos, {content:action.content, id: id}]
    }
  }
  case "Add_Todo_Error":
  {
    console.log("Error")
    return state;
  }
  default: return state;
}
}
export default rootReducer