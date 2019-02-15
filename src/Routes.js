import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Home from "./containers/Marketing/Home/Home";
import Login from "./containers/Authentication/Login/Login";
import Register from "./containers/Authentication/Register/Register";
import Dashboard from "./containers/Product/Dashboard/Dashboard";
import NotFound from "./containers/ErrorPages/NotFound/NotFound";

export default ({ childProps }) =>
  <Switch>
    <UnauthenticatedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/register" exact component={Register} props={childProps} />
    <AuthenticatedRoute path="/dashboard" exact component={Dashboard} props={childProps} />

    <Route component={NotFound} />
  </Switch>;