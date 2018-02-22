import React from "react";
import Button from "material-ui/Button";
import { FormControl } from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";
import axios from "axios";
import { asyncHelper } from "../utils";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }

  onLogin = async () => {
    try {
      const response = await asyncHelper(axios.post('/auth', { username: "admin", password: "admin" }));
      this.props.history.push("/somewhere")
      console.log(response);
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return (<div>
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