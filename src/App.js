import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import "./styles.css";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/auth" component={AuthPage}></Route>
        </Switch>
      </div>
    </Fragment>
  );
};
export default App;
