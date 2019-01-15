const functions = require('firebase-functions');
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
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createHistory(history);
})
