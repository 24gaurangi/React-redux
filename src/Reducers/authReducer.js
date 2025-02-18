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
    console.log(action.err.message)
    return {
    ...state,
    authError: 'Login failed. ' + action.err.message
  }
  }
  case "Logout_Success":
  {
    console.log("Logout success")
    return {
    ...state,
    authError: null
  }

  }
  case "SignUp_Error":
  {
    console.log("SignUp error", action.err.message)
    return {
    ...state,
    authError: 'SignUp failed. ' + action.err.message
  }
  }
  case "SignUp_Success":
  {
    console.log("SignUp success")
    return {
    ...state,
    authError: null
  }
  }
  default: return state;
  }
}


export default authReducer
