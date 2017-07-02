import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../api';

class LoginForm extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      pin: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleLogin() {
    const res = await api.get('/user-info');
    console.log(res.data);
    const { username, pin } = this.state;
    if(username !== res.data.username || pin !== res.data.pin) {
      alert('Invalid user credentials!');
    } else {
      this.props.history.push('/homepage')
    }
  }
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Username</label>
          <p className="control">
            <input
              name='username'
              onChange={this.handleChange}
              value={this.state.username}
              type="text"
              className="input"
              placeholder="Username"/>
          </p>
        </div>
        <div className="field">
          <label className="label">PIN</label>
          <p className="control">
            <input
              name='pin'
              onChange={this.handleChange}
              value={this.state.pin}
              type="password"
              className="input"
              placeholder="PIN"/>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button onClick={this.handleLogin} className="button is-primary">Login</button>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginForm;
