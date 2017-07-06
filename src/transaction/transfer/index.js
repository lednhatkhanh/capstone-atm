import './index.css';

import React, { Component } from 'react';
import TransferUser from './TransferUser';

import api from '../../api';
import './index.css';

class Transfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      money: 0,
      users: [],
      user: null
    }

    this.updateBalance = this.updateBalance.bind(this);
    this.handleTransfer = this.handleTransfer.bind(this);
    this.handleSelectUser = this.handleSelectUser.bind(this);
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
      user: this.state.user || 0
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
  handleSelectUser (e) {
    this.setState({
      user: e.target.value
    });
  }
  render() {
    return (
      <div className='card homepage transfer box'>
        <h3 className="title ">You have $ {this.state.money}</h3>
        <div className="group">
          <p className="control">
            <span className="select">
              <select onChange={this.handleSelectUser} value={this.state.user || 0}>
                {this.state.users.map((u, i) => <option key={u.id} value={i}>{u.username}</option>)}
              </select>
            </span>
          </p>
        </div>
        { this.state.users.length !== 0 ?
          <TransferUser
            key={this.state.users[this.state.user].id}
            user={this.state.users[this.state.user]}
            updateBalance={this.updateBalance}
            money={this.state.money} />
          : null
        }
        <div className="transfer-back">
          <button onClick={() => this.props.history.goBack()} className="button">Back</button>
        </div>
      </div>
    );
  }
}

export default Transfer;
