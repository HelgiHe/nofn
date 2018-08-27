import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default hot(module)(App);
