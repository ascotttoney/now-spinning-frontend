import React from "react";
import vertLogo from "../images/now-spinning-logo-1.png"
import lilbub from "../images/lilbub.jpg"

export default (props) => {
  return (
      <div className="column is-one-fifth has-background-grey-lighter">
        <div className="sidebar">
          <img src={vertLogo} alt="Now Spinning logo" className="sidebar-logo" />

          <div className="sidebar-text">
            { localStorage.token ? <a className="menu-item" href="/">HOME</a> : <a className="menu-item" href="/">LOGIN</a> }
              <br />
            { localStorage.token ? <a className="menu-item" href="/collection">MY COLLECTION</a> : null }
              <br />
            <a href="/albums">SEARCH ALBUMS</a>
              {/* <br />
            <a className="menu-item" href="/artists">SEARCH ARTISTS</a>
              <br /> */}

            {/* <Router>
              <NavLink to="/">Home</NavLink>
                <br />
              <NavLink to="/albums">Search Albums</NavLink>
                <br />
              <NavLink to="/artists">Search Artists</NavLink>
                <br />
              <NavLink to="/collection">My Collection</NavLink>
            </Router> */}
          </div>

          <img src={lilbub} className="is-centered sidebar-profile-image" alt="user's profile avatar" />

        </div>
      </div>
  );
};
