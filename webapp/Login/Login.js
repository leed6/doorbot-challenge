import React from "react";
import Button from "material-ui/Button";
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
      const response = await axios.post('/auth', { username , password  });
      if (response) {
        console.log(response);
        this.props.authenticateUser();
      }
    } catch(error) {
      console.log(error);
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
        variant="raised" 
        color="primary"
        onClick={this.onLogin}
      >
        Login
      </Button>
    </div>);
  }
}