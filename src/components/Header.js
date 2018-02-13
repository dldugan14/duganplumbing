import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { nav, DropdownButton } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="App-header">
          <div className="nav">
            <div className="navbar" role="navigation">
              <div className="container">
                <div className="navbar-header">
                  <NavLink
                    to="/Home"
                    className="nav-logo"
                    activeClassName="active"
                  >
                    <img
                      className="nav-logo col-xs-11 col-sm-11 col-md-11 col-lg-11"
                      src={require("../assets/tweaks2.svg")}
                    />
                  </NavLink>
                </div>

                <ul className="nav hidden-xs col-sm-6 col-md-6 col-lg-3 col-xl-6">
                  <li className="nav-item first">
                    <NavLink
                      to="/Home"
                      className="nav-item inner"
                      activeClassName="active col-xs-6 col-sm-6 col-md-6 col-lg-6"
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

                <DropdownButton
                  type="button"
                  className="navButton hidden-sm hidden-md hidden-lg hidden-xl"
                  id="Dropdown menu"
                  title="="
                  pullRight
                >
                  <ul>
                    <li className="">
                      <NavLink to="/Home">Home</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/aboutus">About Us</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/contact">Schedule an Appointment</NavLink>
                    </li>
                  </ul>
                </DropdownButton>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
