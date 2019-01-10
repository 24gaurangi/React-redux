import authReducer from './authReducer'
import todoReducer from './todoReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
