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

export const signUp = (user) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //async
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((resp) => {
      return(firestore.collection('Users').doc(resp.user.uid).set({
        firstName:user.firstName,
        lastName:user.lastName,
        initials: user.firstName[0] + user.lastName[0]
      })).then(() => { dispatch({ type: "SignUp_Success"}); })
    }).catch((err) => { dispatch({type: "SignUp_Error",  err  });
   })

  }
};
