import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Redirect
} from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.css";
import AlbumContainer from "./containers/AlbumContainer";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route exact path="/albums" render={() => <AlbumContainer />} />
        </Router>
      </div>
    );
  }
}

export default App;
