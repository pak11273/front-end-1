import {
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
} from "../consts";

import axios from "axios";

export const registerUser = (user) => (dispatch) => {
  dispatch({ type: REGISTER_USER_START });
  axios
    .post("https://family-recipes-cookbook.herokuapp.com/user/register", user )
    .then((res) => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: REGISTER_USER_FAIL, payload: err }));
};

// login feature
// Returns: { "user": { "user_id: 1, "username": "UniqueUsername" }, "token": "Authentication Token" }

export const loginUser = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_USER_START });
  axios
    .post("https://family-recipes-cookbook.herokuapp.com/user/login", payload)
    .then((res) => {
      
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) =>
      dispatch({ type: LOGIN_USER_FAIL, payload: err.response.data.message })
    );
};
