import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Routes from "./Routes";
import { Link } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }


  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (

      <div className="App container">
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <Routes childProps={childProps} />
        Footer
      </div>
    );
  }
}

export default App;
