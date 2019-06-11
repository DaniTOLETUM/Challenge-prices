import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/navpages.css";

export default class NavPages extends Component {
  render() {
    return (
      <nav id="nav_pages">
        <div>
          <NavLink
            className="link pages"
            activeClassName="is-active"
            to="/carte"
          >
            Carte
          </NavLink>
        </div>
        <div>
          <NavLink
            className="link pages"
            activeClassName="is-active"
            to="/shop"
          >
            Boutique
          </NavLink>
        </div>
      </nav>
    );
  }
}
