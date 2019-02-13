import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Routes from "./Routes";
import { Link } from "react-router-dom";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import requireAuth from "./hocs/AuthenticatedComponent";

// import Home from './components/Marketing/Home/Home';
// import Login from './components/Authentication/Login/Login';
// import Register from './components/Authentication/Register/Register';
// import Dashboard from './components/Product/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      // <Router>
      //   <div>
      //     <Route exact path="/" component={Home} />
      //     <Route path="/login" component={Login} />
      //     <Route path="/register" component={Register} />
      //     <Route path="/dashboard" component={Dashboard} />
      //     <Route handler={requireAuth(Dashboard)} name="dashboard"/>
      //   </div>
      // </Router>
      <div className="App container">
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <Routes />
        Footer
      </div>
    );
  }
}

export default App;
