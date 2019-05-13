import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import About from './views/About';
import SignUp from './views/Signup';
import NoMatch from './views/NoMatch';
import Names from './views/Names';
import Nav from './components/Nav';

import ScrollToTop from './components/scrollToTop';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <ScrollToTop />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/names" exact component={Names} />
            <Route path="/login" exact component={Login} />
            <Route path="/about" exact component={About} />
            <Route path="/signup" component={SignUp} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default hot(module)(App);
