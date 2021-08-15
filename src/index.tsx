import React from "react";
import ReactDOM from "react-dom";

//Redux and Reducer Imports
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

//Style Imports
import "./styles/base.scss";

//Import App
import App from "./components/App";

//Create Redux Store
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
