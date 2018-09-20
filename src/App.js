import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import About from './views/About';
import NoMatch from './views/NoMatch';
import Input from './components/input';
import NameList from './components/nameList';
import ScrollToTop from './components/ScrollToTop';
import { firebaseApiKey } from '../config/keys';
import firebase from 'firebase/app';
import './App.scss';

class App extends Component {
  componentDidMount = () => {
    // Initialize Firebase
    const config = {
      apiKey: firebaseApiKey,
      authDomain: 'nofn-4cfa4.firebaseapp.com',
      databaseURL: 'https://nofn-4cfa4.firebaseio.com',
      projectId: 'nofn-4cfa4',
      storageBucket: 'nofn-4cfa4.appspot.com',
      messagingSenderId: '375606112602'
    };
    firebase.initializeApp(config);
  };
  render() {
    return (
      <Router>
        <div className="app">
          <ScrollToTop />
          Nofn
          <Input />
          <NameList />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/about" exact component={About} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default hot(module)(App);
