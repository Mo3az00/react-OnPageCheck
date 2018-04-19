import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              exact
              className="nav-item nav-link"
              activeClassName="active"
              to="/"
            >
              Step 1 <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              activeClassName="active"
              to="/2"
            >
              Step 2
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              activeClassName="active"
              to="/3"
            >
              Step 3
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
