import { userLoginTypes } from "../constants/user-types";

const initialState = {
  currentUser: null,
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userLoginTypes.USER_LOGIN_SUCCESS:
      return { ...state, currentUser: payload };

    case userLoginTypes.USER_LOGIN_FAIL:
      return { ...state, currentUser: null, error: payload };

    default:
      return state;
  }
};
