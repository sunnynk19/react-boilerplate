import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Marketing/Home/Home";
import Login from "./containers/Authentication/Login/Login";
import Register from "./containers/Authentication/Register/Register";
import Dashboard from "./containers/Product/Dashboard/Dashboard";
import NotFound from "./containers/ErrorPages/NotFound/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route component={NotFound} />
  </Switch>;