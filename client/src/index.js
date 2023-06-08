import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { reducers } from "./reducers";
import App from "./App";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const clientId =
  "543793663153-0iljnmj8paf84b54q6bqn4lsmjja7udn.apps.googleusercontent.com";

ReactDOM.render(
  <GoogleOAuthProvider clientId={clientId}>
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
