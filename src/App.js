// @flow
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './card-reader';
import HomePage from './controller';
import CheckAccount from './validations';
import Withdraw from './transactions/withdraw';
import Transfer from './transfer';
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
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
