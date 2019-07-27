import React from "react";
import "./style.scss";
import Sidebar from "./components/Sidebar";
import MainWindow from "./containers/MainWindow";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="columns is-gapless">
          <Sidebar />
          <MainWindow />
        </div>
      </React.Fragment>
    );
  }
}
