import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCr6fEav5uF06L_kuds3FC_2YKW7sV8-gU',
      authDomain: 'managers-b951b.firebaseapp.com',
      databaseURL: 'https://managers-b951b.firebaseio.com',
      projectId: 'managers-b951b',
      storageBucket: '',
      messagingSenderId: '868764301829'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
