import React, { Component } from "react";

import Header from "./Header";

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

export default App;
