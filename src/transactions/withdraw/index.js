import './WithDraw.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Link } from 'react-router-dom';
import api from '../../api';

class Withdraw extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      money: 0,
      modal: false
    }

    this.handleWithdraw = this.handleWithdraw.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleClickYes = this.handleClickYes.bind(this);
    this.handleClickNo = this.handleClickNo.bind(this);
  }
  async componentDidMount() {
    const res = await api.get('/account');
    const money = parseInt(res.data.money, 10);
    this.setState({
      money,
    })
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleClickYes(){
    this.toggle();
    const amount = this.amountInput.value;
    alert('You withdraw $' + amount + '. Your account balance is ' + this.state.money);
    this.amountInput.value = '';
  }
  handleClickNo(){
    this.toggle();
    alert('Thank you for using our service!');
  }
  async handleWithdraw() {
    const amount = this.amountInput.value;
    if(!amount || amount > this.state.money ||amount%20!==0|| amount  < 20) {
      alert('Invalid amount! The amount must be multiple of 20$');
      this.amountInput.value = '';
    } else {
      await api.patch('/account', {
        money: this.state.money - amount,
      });
      this.setState({
        money: this.state.money - amount,
      });
      //this.toggle();
      alert('You withdraw $' + amount);
    }
  }
  render() {
    return (
      <div className="card" id='main'>
        <div className="card-content">
          <div className="title"><h1 >Withdraw</h1></div>
          <hr/>
          <div className="field d-flex justify-content-end">
            <div className="mr-auto p-2">
              <label className='label' htmlFor="amount">Amount to withdraw</label>
            </div>
            <div className="control withdraw p-2">
              <input
              ref={(input) => { this.amountInput = input }}
              name='amount'
              className='input'
              type="number"
              step="20"
              min='20'
              max={this.state.money}/>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <div>
              <Button onClick={this.handleWithdraw} className="button withdraw" outline color="info">Withdraw</Button>

            </div>
            <div>
              <Link to='/'>
                <a>
                  <Button onClick={() => this.props.history.goBack()} className="button withdraw" outline color="danger">Back</Button>
                </a>
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Withdraw;
