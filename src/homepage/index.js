import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stylesheet from './Homepage.css';
import { Row } from 'reactstrap';



class HomePage extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        <div className="main_content d-flex flex-column ">
          <div className="title"><h3>Welcome to Sunway ATM</h3></div>
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
                <Link to='/transfer' className='link'>
                 Deposit
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
