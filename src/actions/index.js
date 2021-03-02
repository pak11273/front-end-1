import {
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
} from "../consts";

import axios from "axios";

// baseURL: https://family-recipes-cookbook.herokuapp.com/

// POST /user/register
// Required fields: { "username": "UniqueUsername", (128 character max, unique) "firstname": "FirstName", (128 character max) "lastname": "LastName", (128 character max) "email": "email@email.com", (256 character max) "password": "password" (128 character max) }

// Returns: { "user_id: 1, "username": "UniqueUsername" }

export const registerUser = (signupSubmit) => (dispatch) => {
  dispatch({ type: REGISTER_USER_START });
  axios
    .post("https://family-recipes-cookbook.herokuapp.com/user/register", {
      ...signupSubmit,
    })
    .then((res) => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: err.response.data.message,
      });
    });
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
        payload: {
          username: res.data.user.username,
          user_id: res.data.user.user_id,
          token: res.data.token,
        },
      });
    })
    .catch((err) =>
      dispatch({ type: LOGIN_USER_FAIL, payload: err.response.data.message })
    );
};
