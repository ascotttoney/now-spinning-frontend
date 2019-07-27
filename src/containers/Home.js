import React, { Component, Fragment } from "react";
import { store } from "../store";

class Home extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <Fragment>
        <div className="home-page">
          <h1 className="title is-2">
            {store.getState().user.userData.first_name} {store.getState().user.userData.last_name}
          </h1>
          
          <h3 className="subtitle is-5">{store.getState().user.userData.email}</h3>
        </div>
      </Fragment>
    );
  }
}

export default Home;
