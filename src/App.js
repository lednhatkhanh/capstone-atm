// @flow
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import HomePage from './homepage';
import CheckAccount from './checkAccount';
import Withdraw from './withdraw';
import Transfer from './transfer';
import Deposit from './deposit';
import NoMatch from './NoMatch';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/homepage' component={HomePage} />
        <Route path="/check-account" component={CheckAccount} />
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/transfer" component={Transfer} />
        <Route path="/deposit" component={Deposit} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
