const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createHistory = (history => {
  return admin.firestore().collection('History').add(history)
  .then(doc => console.log('notification added', doc))
})

exports.todoCreated = functions.firestore.document('Todos/{todo}')
  .onCreate(doc => {
    const todo = doc.data();
    const history = {
      action: 'Added new task',
      content:`${todo.content}`,
      user:`${todo.user}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createHistory(history);
})
exports.todoDeleted = functions.firestore.document('Todos/{todo}')
  .onDelete(doc => {
    const todo = doc.data();
    const history = {
      action: 'Deleted task',
      content:`${todo.content}`,
      user:`${todo.user}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createHistory(history);
})

exports.todoCompleted = functions.firestore.document('Todos/{todo}')
  .onUpdate(doc => {
    const todo = doc.data();
    const history = {
      action: 'Completed task',
      content:`${todo.content}`,
      user:`${todo.user}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createHistory(history);
})
