import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducers";

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}
const token = localStorage.getItem("applicationToken")
  ? localStorage.getItem("applicationToken")
  : null;
const initialState = {
  user: {
    isAuthenticated: !!token
  }
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
