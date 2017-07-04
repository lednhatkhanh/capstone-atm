import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className='card'>
        <div className="card-content">
          <h1 className="title">Welcome to Sunway ATM</h1>
          <div className="field is-grouped">
            <p className="control">
              <Link to='/check-account' className='button is-info'>
                Check account
              </Link>
            </p>
            <p className="control">
              <Link to='/withdraw' className='button is-info'>
                Withdraw
              </Link>
            </p>
            <p className="control">
              <Link to='/transfer' className='button is-info'>
                Transfer
              </Link>
            </p>
            <p className="control">
              <Link to='/transfer' className='button is-info'>
                Deposit
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
