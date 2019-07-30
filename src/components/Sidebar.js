import React from "react";
import { connect } from "react-redux";
import vertLogo from "../images/now-spinning-logo-1.png"
import vinylRecord from "../images/blank-vinyl.png"

class Sidebar extends React.Component {
  logOut = () => {
    localStorage.clear()
  }

  render() {
    if (localStorage.token) {
      return (
          <div className="column is-2 has-background-grey-lighter">
            <div className="sidebar">
              <img src={vertLogo} alt="Now Spinning logo" className="sidebar-logo" />

              <div className="sidebar-text">
                <a className="menu-item" href="/collection">MY COLLECTION</a>
                  <br />
                <a className="menu-item" href="/albums">SEARCH ALBUMS</a>
                  <br />
                <a className="menu-item" href="/" onClick={() => this.logOut()} >LOG OUT</a>

                {/* <Router>
                  <NavLink to="/collection">My Collection</NavLink>
                    <br />
                  <NavLink to="/albums">Search Albums</NavLink>
                </Router> */}
              </div>

              <div className="sidebar-user-info">
                <h2 className="title is-6 white-text">{this.props.user.first_name} {this.props.user.last_name}</h2>
                <p className="subtitle is-6 white-text">{this.props.user.email}</p>
              </div>

              {this.props.user.profile_picture ?
                <img
                  src={this.props.user.profile_picture}
                  className="is-centered sidebar-profile-image"
                  alt="user's profile avatar" />
                :
                <img
                  src={vinylRecord}
                  className="is-centered sidebar-profile-image"
                  alt="user's profile avatar" />
              }

            </div>
          </div>
      );
    }

    return (
        <div className="column is-2 has-background-grey-lighter">
          <div className="sidebar">
            <img src={vertLogo} alt="Now Spinning logo" className="sidebar-logo" />

            <div className="sidebar-text">
              <a className="menu-item" href="/">LOGIN</a>
                <br />
              <a className="menu-item" href="/albums">SEARCH ALBUMS</a>
            </div>

            <img src={vinylRecord} className="is-centered sidebar-profile-image" alt="user's profile avatar" />

          </div>
        </div>
    );
  };
}

const mapStateToProps = (state) => ({
  user: state.user.userData
})

export default connect(mapStateToProps)(Sidebar);
