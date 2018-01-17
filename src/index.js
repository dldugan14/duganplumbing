import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import Home from "./components/Home";
import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
