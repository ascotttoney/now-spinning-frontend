import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import AlbumContainer from "./AlbumContainer";
import MyCollection from "./MyCollection";

export default class MainWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null
    };
  }

// --------------------------------------------------------- //

  render() {
    return (
      <div className="column">
        <div className="main-window">
          <Router>
            {this.state.redirect}

            <Switch>
              <Route
                exact
                path="/"
                render={() => (localStorage.token ? <MyCollection /> : <LoginPage />)}
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
