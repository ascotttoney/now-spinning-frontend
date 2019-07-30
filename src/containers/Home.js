import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Home extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <Fragment>
        <div className="home-page">
          <h2 className="title is-2">
            {this.props.user.first_name} {this.props.user.last_name}
          </h2>

          <p className="subtitle is-5">{this.props.user.email}</p>
        </div>

        <div className="">

        </div>

      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.userData
})

// export default connect(mapStateToProps)(Home);
