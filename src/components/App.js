import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";

const mapStateToProps = state => ({
  ...state.Common
});

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  render() {
    const appName = this.props.appName;
    return (
      <div className="App">
        <Header appName={appName} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
