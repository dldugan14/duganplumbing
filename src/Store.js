import { createStore, combineReducers, compose } from "redux";

import Common from "./reducers/Common";

const reducer = combineReducers({
  Common
});

const store = createStore(
  reducer,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;
