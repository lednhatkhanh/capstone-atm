import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../api';
import  stylesheet from './CheckAccount.css';
import { Row, Col,Button } from 'reactstrap';



class CheckAccount extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      money: 0,
    }

    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  async componentDidMount() {
    const res = await api.get('/account');
    this.setState({
      money: res.data.money,
    });
  }
  handleGoBack() {
    this.props.history.goBack();
  }
  handleCancel(){
    alert('Thank you for using our service!');
  }
  render() {
    return (
      <div className="card">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="card-content">
          <p className='title'> Your account ballance is <br/> {this.state.money}$ </p>
          <br/>
          <p style={{textAlign: "center"}}>------------------</p>
          <div className='title'> Do you want to make <br/> another transaction? <br/>
            <div className="d-flex justify-content-around set_button">
                <div><Button onClick={this.handleGoBack} className="button" outline color="success">Yes</Button></div>
                <div><Button onClick={this.handleCancel} className="button" outline color="danger">No</Button></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckAccount;
