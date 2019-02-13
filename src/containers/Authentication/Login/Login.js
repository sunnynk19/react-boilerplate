import React, { Component } from 'react';
import './Login.css';

import { Button, FormGroup } from 'reactstrap';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = (value,type) => {
    this.setState({
      [type]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post('/user', this.state)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-12">
          <h1>Login</h1>
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <p>Email</p>
                <input
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e.target.value, "email")}
                />
              </div>
              <div className="form-group">
                <p>Password</p>
                <input
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e.target.value, "password")}
                  type="password"
                />
              </div>
              <Button
                block
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Login;
