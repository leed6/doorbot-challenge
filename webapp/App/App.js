import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";

export default class App extends React.Component {
  render() {
    return (
    <Switch>
      <Route exact path='/' component={Login} />
    </Switch>);
  }
}