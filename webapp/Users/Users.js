import React from "react";
import Button from "../Button";
import axios from "axios";

export default class Users extends React.Component {
  state = {

  }

  render() {
    return (<div>
      <h1>Users</h1>
      {
        // show current user info here
      }
      <Button label="Create a user"/>
      <Button label="Get Users"/>
      {
        // add drop down for user info
      }
    </div>);
  }
}