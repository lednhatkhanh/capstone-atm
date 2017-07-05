import './index.css';

import React, { Component } from 'react';
//import TransferUser from './TransferUser';
import {Input
  ,Button, Label
} from 'reactstrap';
import stylesheet from './index.css';
import api from '../api';

//
//
//         <Input type="text" value={this.state.id} onChange={this.handleChangeID}  placeholder="Enter ID" />


//         <Input type="number" min="20"
//           step="20"
//           max={this.state.money}
//           value={this.state.amount}
//           onChange={this.handleChangeAmount}
//           placeholder="Enter amount to transfer"
//         />


//         <button onClick={() => this.handleTransfer(this.state.id, this.state.amount)} className="button is-primary">Transfer</button>
//         <button onClick={() => this.props.history.goBack()} className="button">Back</button>

class Transfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      money: 0,
      users: [],
      amount: 20
    }

    this.updateBalance = this.updateBalance.bind(this);
    this.handleTransfer = this.handleTransfer.bind(this);
    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
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


  async handleTransfer(id, amount) {
    let temp = 0;
    if((!amount || !id || amount > this.state.money || amount < 20)) {
      alert("Invalid amount! The amount must be multiple of 20$");
    }
    else {
      for(let user of this.state.users) {
        if(user.id == id) {
          temp++;
          await api.patch(`/users/${id}`, {
            money: user.money + parseInt(amount, 10),
          });

          await api.put('/account', {
            money: this.state.money - parseInt(amount, 10),
          });

          alert(`You transfered to ${user.username}: $${amount}`);
          this.updateBalance();
        }
      }
      if(temp === 0) {
        alert(`ID: ${id} not exists !`);
      }
    }
  }

  handleChangeID(event) {
    this.setState({id: event.target.value});
  }

  handleChangeAmount(event) {
    this.setState({amount: event.target.value});
  }

  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="main_content d-flex flex-column">
          <div style={{textAlign: 'center'}}><h1 >Transfer</h1></div>
          <hr/>

          <div className="content d-flex justify-content-around ">
            <div className="p-2">
              <Label for="id">ID</Label>
              <Input className="item_input" type="text" value={this.state.id} onChange={this.handleChangeID}  placeholder="Enter ID" />
            </div>
            <div className="p-2">
              <Label for="amount">Amount to transfer</Label>
              <Input className="item_input" type="number" min="20"
                step="20" max={this.state.money}
                value={this.state.amount} onChange={this.handleChangeAmount}
                placeholder="Enter amount to transfer"
              />
            </div>
          </div>

          <div className="d-flex justify-content-around">
            <Button onClick={() => this.handleTransfer(this.state.id, this.state.amount)}
             outline color="info" className= "button transfer">Transfer</Button>
            <Button onClick={() => this.props.history.goBack()}
             outline color="danger" className= "button transfer">Back</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Transfer;
