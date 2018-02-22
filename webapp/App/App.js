import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import Home from "../Home";

export default class App extends React.Component {
  state = {
    userLogged: false
  }

  authenticateUser = () => {
    this.setState({ userLogged: true });
  }

  render() {
    const { userLogged } = this.state;
    return (<div>
      {userLogged ? <Home /> : <Login authenticateUser={this.authenticateUser} />}
    </div>);
  }
}