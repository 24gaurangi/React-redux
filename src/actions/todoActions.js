
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

export const completeAction = (id) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //async
    const firestoreDB = getFirestore();
    firestoreDB.collection('Todos').doc(id).update({completed:true}).then(() => {
    dispatch({type: "Complete_Todo", id: id});
  }).catch((err) => { dispatch({type: "Complete_Todo_Error",  err  });
})
}
};

export const addAction = (content, user) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //async
    const firestoreDB = getFirestore();
    firestoreDB.collection('Todos').add(
      {content: content, user: user, completed: false, createTime: firestoreDB.FieldValue.serverTimestamp()
      }).then(() => { dispatch({ type: "Add_Todo", content: content  });
    }).catch((err) => { dispatch({type: "Add_Todo_Error",  err  });
   })

  }
};
