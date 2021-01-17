import { userLoginTypes, userLogoutTypes } from "../constants/user-types";

const initialState = {
  currentUser: null,
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userLoginTypes.USER_LOGIN_SUCCESS:
      return { ...state, currentUser: payload, isAuthenticated: true };

    case userLoginTypes.USER_LOGIN_FAIL:
      return { ...state, currentUser: null, error: payload };

    case userLogoutTypes.USER_LOGOUT_SUCCESS:
      return { ...state, currentUser: null, isAuthenticated: false };

    default:
      return state;
  }
};
