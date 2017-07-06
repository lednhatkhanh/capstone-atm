import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

import './Login.css';

class Login extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }
  render() {
    return (
      <div className='card login' id='form-container'>
        <div className="card-content">
          <h1 className="title">Login</h1>
          <LoginForm history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default Login;
