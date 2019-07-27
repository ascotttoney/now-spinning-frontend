import React, { Component } from 'react';
import LoginForm from "../components/LoginForm";
import horizontalLogo from "../images/now-spinning-logo-2.png"

class LoginPage extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <img src={horizontalLogo} alt="Now Spinning logo" className="main-logo is-centered" />
        <LoginForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;
