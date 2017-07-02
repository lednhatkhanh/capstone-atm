import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../api';

class TransferUser extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    updateBalance: PropTypes.func.isRequired,
    money: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);

    this.handleTransfer = this.handleTransfer.bind(this);
  }
  async handleTransfer() {
    const amount = this.amountInput.value;
    if(!amount || amount > this.props.money) {
      alert('INVALID');
    } else {
      await api.patch(`/users/${this.props.user.id}`, {
        username: this.props.user.username,
        money: this.props.user.money + parseInt(amount, 10),
      });
      await api.put('/account', {
        money: this.props.money - parseInt(amount, 10),
      });
      this.props.updateBalance();
    }
  }
  render() {
    const { user, money } = this.props;
    return (
      <div>
        <p>{user.username}</p>
        <p>Balance: {user.money}</p>
        <div className="field has-addons">
          <p className="control">
            <input
              ref={(input) => { this.amountInput = input }}
              type="number"
              className='input'
              placeholder="Amount to transfer"
              min="10000"
              max={money}/>
          </p>
          <p className="control">
            <button onClick={this.handleTransfer} className="button is-primary">Transfer</button>
          </p>
        </div>
      </div>
    );
  }
}

export default TransferUser;
