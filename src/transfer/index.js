import './index.css';

import React, { Component } from 'react';
import TransferUser from './TransferUser';

import api from '../api';

class Transfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      money: 0,
      users: [],
    }

    this.updateBalance = this.updateBalance.bind(this);
    this.handleTransfer = this.handleTransfer.bind(this);
  }
  async componentDidMount() {
    this.updateBalance();
  }
  async updateBalance() {
    const res = await api.get('/account');
    this.setState({
      money: res.data.money,
    });
    const users = await api.get('/users');
    this.setState({
      users: users.data,
    });
  }
  async handleTransfer(id) {
    const amount = this.amountInput.value;
    console.log(amount);
    if(!amount || amount > this.state.money) {
      alert('invalid');
    } else {
      for(let user of this.state.users) {
        if(user.id === id) {
          console.log('ALERT');
        }
      }
    }
  }
  render() {
    return (
      <div className='box'>
        <h3 className="title">You have {this.state.money}VND</h3>
        {this.state.users.map(u => <TransferUser
            key={u.id}
            user={u}
            updateBalance={this.updateBalance}
            money={this.state.money} />)}
        <button onClick={() => this.props.history.goBack()} className="button">Back</button>
      </div>
    );
  }
}

export default Transfer;
