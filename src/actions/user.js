import axios from "axios";
import history from "../utils/history";
import {
  userLoginTypes,
  userLogoutTypes,
  userRegisterTypes
} from "../constants/user-types";
import { apiError, apiRequestFinish, apiRequestStart } from "./ui";

export const loginUserSuccess = (payload) => ({
  type: userLoginTypes.USER_LOGIN_SUCCESS,
  payload
});

export const userLoginFail = (payload) => ({
  type: userLoginTypes.USER_LOGIN_FAIL,
  payload
});

export const loginUser = (payload) => async (dispatch) => {
  try {
    dispatch(apiRequestStart());
    const { data } = await axios.post("/users/login", payload);
    dispatch(loginUserSuccess(data));
    dispatch(apiRequestFinish());
    localStorage.setItem("applicationToken", `Bearer ${data.token}`);
    history.push("/");
  } catch (error) {
    dispatch(apiError(error.response && error.response.data.errorMessage));
    dispatch(apiRequestFinish());
  }
};

export const logout = () => ({
  type: userLogoutTypes.USER_LOGOUT_SUCCESS
});

export const registerUserSuccess = (payload) => ({
  type: userRegisterTypes.USER_REGISTER_SUCCESS,
  payload
});

export const registerUserFail = (payload) => ({
  type: userRegisterTypes.USER_REGISTER_FAIL,
  payload
});

export const registerUser = (payload) => async (dispatch) => {
  try {
    dispatch(apiRequestStart());
    const { data } = await axios.post("/users/register", payload);
    if (data) {
      dispatch(registerUserSuccess(data));
      history.push("/auth/login");
      dispatch(apiRequestFinish());
    }
  } catch (error) {
    dispatch(apiError(error.response && error.response.data.errorMessage));
    dispatch(apiRequestFinish());
  }
};
