const initState = {
  authError : null
}
const authReducer = (state = initState, action) => {
  switch(action.type){
    case "Login_Success":
    {
      console.log("Login success")
      return {
      ...state,
      authError: null
    }
  }
  case "Login_Error":
  {
    console.log("Login error")
    return {
    ...state,
    authError: 'Login failed'
  }
  }
  case "Logout_Success":
  {
    console.log("Logout success")
    return state

  }
  default: return state;
  }
}


export default authReducer