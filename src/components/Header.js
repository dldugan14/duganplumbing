import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="App-header">
          <div className="nav">
            <NavLink to="/Home" className="nav-logo" activeClassName="active">
              <img
                className="nav-logo"
                src={require("../assets/LogoTakeThree.svg")}
              />
            </NavLink>
            <div className="nav-bar">
              <ul className="nav">
                <li className="nav-item first">
                  <NavLink
                    to="/Home"
                    className="nav-item inner"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/aboutus"
                    className="nav-item inner"
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-item inner"
                    activeClassName="active"
                  >
                    Schedule an Appointment
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
