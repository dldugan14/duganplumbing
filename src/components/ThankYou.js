import React, { Component } from "react";

class ThankYou extends Component {
  render() {
    return (
      <div className="ThankYou">
        <h1>{this.props.Title}</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default ThankYou;
