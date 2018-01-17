import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="App-header">
          <div className="container">
            <h1>{this.props.appName}</h1>
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <NavLink to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="aboutus" activeClassName="active">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="contact" activeClassName="active">
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
