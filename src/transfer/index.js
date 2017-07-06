import './index.css';

import React, { Component } from 'react';
import TransferUser from './TransferUser';

import api from '../api';
import './index.css';

class Transfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      money: 0,
      users: [],
    }

    this.updateBalance = this.updateBalance.bind(this);
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
  render() {
    return (
      <div className='card homepage transfer box'>
        <h3 className="title ">You have $ {this.state.money}</h3>
        {this.state.users.map(u => <TransferUser
            key={u.id}
            user={u}
            updateBalance={this.updateBalance}
            money={this.state.money} />)}
        <div className="transfer-back">
          <button onClick={() => this.props.history.goBack()} className="button">Back</button>
        </div>
      </div>
    );
  }
}

export default Transfer;
