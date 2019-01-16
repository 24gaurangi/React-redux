import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import config from './firebaseConfig'
import './index.css'

const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(config),
  reactReduxFirebase(config, { useFirestoreForProfile: true, userProfile: 'Users', attachAuthIsReady: true })
)
);

store.firebaseAuthIsReady.then(
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root')),
serviceWorker.register()
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
