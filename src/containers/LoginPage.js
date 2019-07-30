import React, { Component } from 'react';
import LoginForm from "../components/LoginForm";
import horizontalLogo from "../images/now-spinning-logo-2.png"

class LoginPage extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="login-page">
        <img src={horizontalLogo} alt="Now Spinning logo" className="main-logo is-centered" />
         <br />
        <p className="intro-text">
          <strong>NOW SPINNING</strong> is for music lovers. Vinyl lovers, especially. Those of us who know that there is nothing better than the white noise before your favorite song kicks in.
            <br /><br />
          It's fun, it's elegant, it's cerebral. To physically touch the music, to see it being played by a now-ancient technology. You can turn the volume down all the way and still hear the music emanating from the point where the sylus meets the record.
            <br /><br />
          Flipping through the liner notes, reading the lyrics, looking at the pictures. While the convienience of modern streaming service has become an essential part of any music-lover's life, there must still be a place for a medium that forces you to slow down and appreciate the work that went into the art.
            <br /><br />
          I hope you'll use this service to find something new or reconnect with an old friend that got you through a hard time.
        </p>
          <br /> <br />
        <LoginForm onSubmit={this.submit} />

      </div>
    );
  }
}

export default LoginPage;
