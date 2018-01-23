import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import Home from "./components/Home";
import store from "./Store";
import Footer from "./components/Footer";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route path="/" component={Footer} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
