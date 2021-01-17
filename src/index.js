import React from "react";
import "./assets/bulma/bulma.min.css";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { Router } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import history from "./utils/history";

axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
axios.defaults.headers.common["Authorization"] = localStorage.getItem(
  "applicationToken"
)
  ? localStorage.getItem("applicationToken")
  : null;
axios.defaults.headers.post["Content-Type"] = "application/json";
console.log("applicationToken", localStorage.getItem("applicationToken"));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
        <Toaster position="top-right" />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
