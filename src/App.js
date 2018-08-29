import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Input from './components/input';
import NameList from './components/nameList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          Hi there!
          <Input />
          <NameList />
          {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
          </Switch> */}
        </div>
      </Router>
    );
  }
}
export default hot(module)(App);
