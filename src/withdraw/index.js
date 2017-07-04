import './WithDraw.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../api';

class Withdraw extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      money: 0,
    }

    this.handleWithdraw = this.handleWithdraw.bind(this);
  }
  async componentDidMount() {
    const res = await api.get('/account');
    const money = parseInt(res.data.money, 10);

    this.setState({
      money,
    })
  }
  async handleWithdraw() {
    const amount = this.amountInput.value;
    if(!amount || amount > this.state.money ||amount%20!==0) {
      alert('Invalid amount! The amount must be multiple of 20$');
    } else {
      await api.patch('/account', {
        money: this.state.money - amount,
      });
      this.setState({
        money: this.state.money - amount,
      })
    }
  }
  render() {
    return (
      <div className="card" id='main'>
        <div className="card-content">
          <h3>You have {this.state.money}$</h3>
          <div className="field">
            <label className='label' htmlFor="amount">Amount to withdraw</label>
            <div className="control">
              <input
              ref={(input) => { this.amountInput = input }}
              name='amount'
              className='input'
              type="number"
              step="20"
              min='1000'
              max={this.state.money}/>
            </div>
          </div>
          <div className="field is-grouped">
            <p className="control">
              <button onClick={this.handleWithdraw} className="button is-primary">Withdraw</button>
              <button onClick={() => this.props.history.goBack()} className="button">Back</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Withdraw;