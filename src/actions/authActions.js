export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //async
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
      dispatch({ type: "Login_Success"});
    }).catch((err) => { dispatch({type: "Login_Error",  err  });
   })

  }
};

export const signOut = () => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //async
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: "Logout_Success"});
    }).catch((err) => { dispatch({type: "Logout_Error",  err  });
   })

  }
};
