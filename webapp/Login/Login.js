import React from "react";
import Button from "../Button";
import { FormControl } from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";
import axios from "axios";

export default class Login extends React.Component {
  state = {
    username: "admin",
    password: "admin"
  }

  onLogin = async () => {
    const { username, password } = this.state;
    try {
      await axios.post('/auth', { username , password  });
      this.props.authenticateUser();
    } catch(error) {
    }
  }

  render() {
    return (<div>
      <p>Username: admin</p>
      <p>Password: admin</p>
      <FormControl>
          <InputLabel>Name</InputLabel>
          <Input value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
      </FormControl>

      <FormControl>
          <InputLabel>Password</InputLabel>
          <Input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
      </FormControl>

      <Button 
        onClick={this.onLogin}
        label="Login"
      />
    </div>);
  }
}