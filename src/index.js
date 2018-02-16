import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import Home from "./components/Home";
import store from "./Store";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import ThankYou from "./components/ThankYou";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/ThankYou" component={ThankYou} />
        <Route path="/" component={Footer} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
