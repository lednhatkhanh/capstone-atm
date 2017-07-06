import './Deposit.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../api';

class Deposit extends Component {
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
    const amount = parseInt(this.amountInput.value, 10);
    console.log(amount, 20);
    if(!amount || amount > this.state.money || ! (amount % 20 === 0)) {
      alert('Invalid amount, must be multiple of 20$');
    } else {
      await api.patch('/account', {
        money: this.state.money + amount,
      });
      this.setState({
        money: this.state.money + amount,
      })
    }
  }

  render() {
    return (
      <div className="card homepage withdraw" id='main'>
        <div className="card-content">
          <h3 className="money">You have ${this.state.money}</h3>
          <div className="field withdraw-input">
            <label className='label amount-withdraw ' htmlFor="amount">Amount to deposit</label>
            <div className="control">
              <input
              placeholder="$"
              ref={(input) => { this.amountInput = input }}
              name='amount'
              className='input'
              type="number"
              min='20'/>
            </div>
          </div>
          <div className="field btn-control is-grouped">
            <p className="control">
              <div>
                <button onClick={this.handleWithdraw} className="button is-primary">Deposit</button>
              </div>
              <button onClick={() => this.props.history.goBack()} className="button">Back</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Deposit;
