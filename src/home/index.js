import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Homepage.css';
class HomePage extends Component {
  render() {
    return (
      <div className='card homepage'>
        <div className="card-content">
          <div className="title">
            <h1>Welcome, Sunway Team Mobile's ATM Machine</h1>
            <h1>Please choose your action!</h1>
          </div>
          <div className="field is-grouped">
            <div className="left">
              <p className="control">
                <Link to='/check-account' className='button check-account is-primary'>
                  Check account
                </Link>
              </p>
              <p className="control">
                  <Link to='/transaction/withdraw' className='button withdraw is-primary'>
                    Withdraw
                  </Link>
                </p>
            </div>
            <div className="right">
              <p className="control">
                <Link to='/transaction/transfer' className='button transfer-home is-primary'>
                  Transfer
                </Link>
              </p>
              <p className="control">
                <Link to='/' className='button exit is-danger'>
                  Exit
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
