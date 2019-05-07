import React from 'react';
import ReactDOM from 'react-dom';
import Firebase, { FirebaseContext } from './context';
import Root from './Root';
import App from './App.js';

ReactDOM.render(
  <Root>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Root>,
  document.getElementById('root')
);
