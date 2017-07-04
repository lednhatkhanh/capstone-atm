// @flow
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './auth';
import HomePage from './home';
import Profile from './profile';
import Withdraw from './transaction/withdraw';
import Transfer from './transaction/transfer';
import NoMatch from './error/404';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/home' component={HomePage} />
        <Route path="/check-account" component={Profile} />
        <Route path="/transaction/withdraw" component={Withdraw} />
        <Route path="/transaction/transfer" component={Transfer} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
