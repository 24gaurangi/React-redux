import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBzUN3YJytQBFt-QxhzJbSakPea2NjBRqY",
    authDomain: "taskmgrapp-87d04.firebaseapp.com",
    databaseURL: "https://taskmgrapp-87d04.firebaseio.com",
    projectId: "taskmgrapp-87d04",
    storageBucket: "taskmgrapp-87d04.appspot.com",
    messagingSenderId: "605523093374"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
