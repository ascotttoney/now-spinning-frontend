import React from "react";
import "./style.scss";
import Sidebar from "./components/Sidebar";
import MainWindow from "./containers/MainWindow";

export function App() {
  return (
    <React.Fragment>
      <div className="columns is-gapless">
        <Sidebar />
        <MainWindow />
      </div>
    </React.Fragment>
  );
}
