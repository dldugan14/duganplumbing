import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";

import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
