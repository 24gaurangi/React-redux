
export const deleteAction = (id) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //async
    const firestoreDB = getFirestore();
    firestoreDB.collection('Todos').doc(id).delete().then(() => {
    dispatch({type: "Delete_Todo", id: id});
  }).catch((err) => { dispatch({type: "Delete_Todo_Error",  err  });
})
}
};

export const addAction = (content, user) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //async
    const firestoreDB = getFirestore();
    firestoreDB.collection('Todos').add({content: content, user: user}).then(() => { dispatch({ type: "Add_Todo", content: content  });
    }).catch((err) => { dispatch({type: "Add_Todo_Error",  err  });
   })

  }
};
