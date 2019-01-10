
export const deleteAction = (id) => {
  return (dispatch, getState) => {
    //async

    dispatch({
      type: "Delete_Todo",
      id: id
    });
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
