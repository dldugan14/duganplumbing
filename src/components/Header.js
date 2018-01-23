import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="App-header">
          <ul className="nav navbar-nav ">
            <li className="nav-item">
              <NavLink to="/" className="nav-item" activeClassName="active">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="aboutus"
                className="nav-item"
                activeClassName="active"
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="contact"
                className="nav-item"
                activeClassName="active"
              >
                Schedule an Appointment
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
