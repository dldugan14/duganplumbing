import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="App-header">
          <div className="container">
            <h1>{this.props.appName}</h1>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
