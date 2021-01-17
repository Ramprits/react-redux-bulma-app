import { combineReducers } from "redux";

import userReducer from "./reducers/user.reducer";
import postReducer from "./reducers/post.reducer";
import uiReducer from "./reducers/ui-reducer";

const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
  ui: uiReducer
});

export default rootReducer;
