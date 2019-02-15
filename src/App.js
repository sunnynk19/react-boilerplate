import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Routes from "./Routes";
import { Link, withRouter } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {

    // axios.post('/checklogin', this.state)
    //   .then(function (response) {
    //     this.userHasAuthenticated(true);
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    this.setState({ isAuthenticating: false });
  }


  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = event => {
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }


  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    console.log(window.location.pathname);
    return (

      !this.state.isAuthenticating &&
      <div className="App container-fluid">
      {
        (window.location.pathname !== '/login' && window.location.pathname !== '/register') ? (
          this.state.isAuthenticated ? (
              <div>
                <div onClick={this.handleLogout}>Logout</div>
              </div>

            ) : (
              <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/dashboard">Dashboard</Link>
              </div>
            )
          ) : ("")
      }

        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
