import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="App-header">
          <div className="nav">
            <NavLink to="/Home" className="nav-item" activeClassName="active">
              <img
                className="nav-item"
                src={require("../assets/LogoTakeThree.svg")}
              />
            </NavLink>
            <ul className="nav">
              <li className="nav-item">
                <NavLink
                  to="/Home"
                  className="nav-item"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/aboutus"
                  className="nav-item"
                  activeClassName="active"
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-item"
                  activeClassName="active"
                >
                  Schedule an Appointment
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
