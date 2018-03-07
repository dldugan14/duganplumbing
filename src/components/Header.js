import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.Common
});

const mapDispatchToProps = dispatch => ({
  SET_WIDTH: width => dispatch({ type: "SET_WIDTH", payload: width })
});

class Header extends Component {
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    this.props.SET_WIDTH(window.innerWidth);
  }

  handleWindowSizeChange = () => {
    this.props.SET_WIDTH(window.innerWidth);
  };

  Resize = () => {
    if (this.props.WinWidth > 480) {
      return (
        <ul className="nav">
          <li className="nav-item first">
            <NavLink
              to="/Home"
              className="nav-item inner"
              activeClassName="active "
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
      );
    } else {
      return (
        <Menu right width={"70%"} className="nav">
          <NavLink className="bar-navLink" activeClassName="active" to="/Home">
            Home
          </NavLink>
          <NavLink
            className="bar-navLink"
            activeClassName="active"
            to="/aboutus"
          >
            About Us
          </NavLink>
          <NavLink
            className="bar-navLink"
            activeClassName="active"
            to="/contact"
          >
            Schedule
          </NavLink>
        </Menu>
      );
    }
  };

  render() {
    return (
      <nav>
        <div className="navbar" role="navigation">
          <div className="container">
            <NavLink to="/Home" className="nav-logo" activeClassName="active">
              <img
                className="nav-logo"
                src={require("../assets/tweaks2.svg")}
                alt="logo"
              />
            </NavLink>
            {this.Resize()}
          </div>
        </div>
      </nav>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
