import React, { Component } from "react";
import Slider from "./slider/Slider";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Slider />
        <p>
          Serving Maricopa and Pinal counties for over 16 years Dugan Plumbing
          offers 24/7 service, at a cost effective rate, and we work with
          several home warranty companies for your convenience.{" "}
        </p>
      </div>
    );
  }
}

export default Home;
