import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stylesheet from './Homepage.css';
import {Button } from 'reactstrap';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleDeposit = this.handleDeposit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleDeposit(){
    alert('This function has not implemented yet!');
  }

  handleCancel(){
    alert('Thank you for using our service!');
  }
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        <div className="main_content d-flex flex-column ">
          <div style={{padding:'10px'}} className="title d-flex justify-content-between">
            <div style={{lineHeight: '150%', fontSize:'28px'}}>Welcome to Sunway ATM</div>
            <div><Link to='/' onClick={this.handleCancel} className="link" style={{color: 'black'}}>
              <Button color="secondary">Exit</Button>
            </Link></div>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-row">
              <div className="item item_1">
                <Link to='/check-account' className='link'>
                 Check account
               </Link>
              </div>
              <div className="item item_2">
                <Link to='/withdraw' className='link'>
                 Withdraw
               </Link>
              </div>

            </div>
            <div className="d-flex flex-row">
              <div className="item item_3">
                <Link to='/transfer' className='link'>
                  Transfer
                </Link>
              </div>
              <div className="item item_4">
                <div className='link' onClick = {this.handleDeposit}>
                 Deposit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
