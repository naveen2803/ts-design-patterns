import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ObserverPatternUI from './observer-pattern';

import Main from './factory-pattern/Main';

class App extends Component {
  render() {
    let m = new Main();

    return (
      <Router>
          <div>
              <Switch>
                  <Route exact path="/" component={ObserverPatternUI}/>
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
