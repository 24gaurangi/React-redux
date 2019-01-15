
export const deleteAction = (id) => {
  console.log('d clicked')
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //async
    const firestoreDB = getFirestore();
    firestoreDB.collection('Todos').doc(id).delete().then(() => {
    dispatch({type: "Delete_Todo", id: id});
  }).catch((err) => { dispatch({type: "Delete_Todo_Error",  err  });
})
}
};

export const addAction = (content) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //async
    const firestoreDB = getFirestore();
    firestoreDB.collection('Todos').add({content}).then(() => { dispatch({ type: "Add_Todo", content: content  });
    }).catch((err) => { dispatch({type: "Add_Todo_Error",  err  });
   })

  }
};
