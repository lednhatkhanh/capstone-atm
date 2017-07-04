import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../api';
import './profile.css';

class Profile extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      money: 0,
      name: "Unknown"
    }

    this.handleGoBack = this.handleGoBack.bind(this);
  }
  async componentDidMount() {
    const res = await api.get('/account');
    this.setState({
      money: res.data.money,
      username: res.data.username
    });
  }
  handleGoBack() {
    this.props.history.goBack();
  }
  handleQuery() {
    alert('This function is not yet implemented');
  }
  render() {
    return (
      <div className="card homepage check-account">
        <div className="card-content">
          <h1 className='title is-3'>
            <div>Name: {this.state.username}</div>
            <div>You have: ${this.state.money}</div>
          </h1>
          <div className="btn-back">
            <button style={{marginRight: 'auto', marginLeft: 0}} onClick={this.handleQuery} className="button is-primary">Query</button>
            <button onClick={this.handleGoBack} className="button is-default">Back</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
