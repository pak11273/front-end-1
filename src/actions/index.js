import {
  REGISTER_USER_FAIL,
  REGISTER_USER_START,
  SET_USER,
} from "../consts";

import axios from "axios";

// login feature
export const setUser = (userObjectIdentifaction) => {
  return {
    type: SET_USER,
    payload: userObjectIdentifaction,
  };
};

// POST /user/register
// Required fields: { "username": "UniqueUsername", (128 character max, unique) "firstname": "FirstName", (128 character max) "lastname": "LastName", (128 character max) "email": "email@email.com", (256 character max) "password": "password" (128 character max) }

// Returns: { "user_id: 1, "username": "UniqueUsername" }

const dummyUser = {
  username: "UniqueUsername1",
  firstname: "FirstName1",
  lastname: "LastName1",
  email: "email@email.com1",
  password: "password1",
};

export const registerUser = () => (dispatch) => {
  dispatch({ type: REGISTER_USER_START });
  axios
    .post("https://family-recipes-cookbook.herokuapp.com/user/register", {
      dummyUser,
    })
    .then((res) => {
      console.log(res);
      // dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data.user })
    })
    .catch((err) => dispatch({ type: REGISTER_USER_FAIL, payload: err }));
};
