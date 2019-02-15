import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

import { Link } from "react-router-dom";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
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
    let self = this;
    this.setState({ isLoading: true });

    axios.post('http://localhost:3000/auth/sign_in', this.state)
      .then(function (response) {
        self.props.userHasAuthenticated(true);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        self.setState({ isLoading: false });
      });

  }

  render() {
    return (
      <div className="row full-height">
        <div className="col-sm-6 text-left left-container-alignment">
          <div className="signin-header">Sign In</div>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input 
                autoFocus
                type="email" 
                className="form-control" 
                id="email" 
                value={this.state.email}
                placeholder="Enter your email" 
                onChange={(e) => this.handleChange(e.target.value, "email")}
                />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="pwd"
                value={this.state.password}
                placeholder="Enter your password" 
                onChange={(e) => this.handleChange(e.target.value, "password")}
                />
            </div>
            <div className="form-group form-check pl-0">
              <label className="form-check-label color-778ca2">
                <input id="remember-me" className="form-check-input" type="checkbox" />
                <label htmlFor="remember-me" className="checker"></label>
                <div className="float-right remember-me-class">Remember me</div>
              </label>
              <div className="float-right color-4d7cfe recover-password">
                Recover password
              </div>
            </div>
            <button type="submit" className="btn btn-blue" disabled={!this.validateForm()} >SIGN IN</button>

            <div className="custom-hr"></div>
            <div className="row">
              <div className="col-sm-4 p-1">
                <button type="button" className="btn btn-fb">FACEBOOK</button>
              </div>
              <div className="col-sm-4 p-1">
                <button type="button" className="btn btn-twittr">TWITTER</button>
              </div>
              <div className="col-sm-4 p-1">
                <button type="button" className="btn btn-google">GOOGLE</button>
              </div>
            </div>
            <div className="mt-5">
              <span className = "color-778ca2">Don’t have an account?</span>
              <Link to="/register" className="color-4d7cfe font-500 cursor-pointer ml-2">Sign up here</Link>
              
            </div>
          </form>

        </div>
        <div className="col-sm-6 login-img"></div>
      </div>
    );
  }
}

export default Login;
