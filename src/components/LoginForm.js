import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value // this is reusable code for changing state in controlled forms
    })
  }

  verifyLogin = (event) => {
    event.preventDefault() // submit button default is to refresh the webpage
    if (!!this.state.username && !!this.state.password) { // verify that neither `username` nor `password` are empty strings
      this.props.handleLogin(this.state) // handleLogin prop is calling on App.login method, and inputting this(loginForm).state as arguments for it 
    }
  }

  render() {
    return (
      <form onSubmit={this.verifyLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.password} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
