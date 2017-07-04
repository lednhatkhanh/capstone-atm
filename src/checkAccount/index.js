import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../api';
import './CheckAccount.css';

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
  render() {
    return (
      <div className="card homepage check-account">
        <div className="card-content">
          <h1 className='title is-3'>You have: ${this.state.money}</h1>
          <div className="btn-back">
            <button onClick={this.handleGoBack} className="button is-primary">Back</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckAccount;
