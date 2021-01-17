import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";

function AuthPage({ match }) {
  return (
    <Fragment>
      <Route exact path={`${match.path}/login`} component={Login}></Route>
      <Route exact path={`${match.path}/register`} component={Register}></Route>
    </Fragment>
  );
}

export default AuthPage;
