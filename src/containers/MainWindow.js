import React, { Component } from "react";
// import { checkCurrentUser } from "../actions/userActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import Home from "./Home";
import AlbumContainer from "./AlbumContainer";
import MyCollection from "./MyCollection";
// let token = localStorage.token

export default class MainWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null
    };
  }

// --------------------------------------------------------- //

  // componentDidMount() {
  //   if (token) checkCurrentUser(token);
  // }

// --------------------------------------------------------- //

  render() {
    return (
      <div className="column is-four-fifths">
        <div className="main-window">
          <Router>
            {this.state.redirect}

            <Switch>
              <Route
                exact
                path="/"
                render={() => (localStorage.token ? <Home /> : <LoginPage />)}
              />
              <Route exact path="/albums" render={() => <AlbumContainer />} />
              <Route exact path="/collection" render={() => <MyCollection />} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
