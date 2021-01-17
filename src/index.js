import React from "react";
import "./assets/bulma/bulma.min.css";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { Router } from "react-router-dom";
import axios from "axios";
const history = createBrowserHistory();

axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
axios.defaults.headers.common["Authorization"] = "";
axios.defaults.headers.post["Content-Type"] = "application/json";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
