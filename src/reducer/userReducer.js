import {
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
} from "../consts/index";

const initialState = {
  user: {
    user_id: '',
    username: ''
  },
  error: "",
  isLoading: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      console.log(state.user, action.payload , 'userReducer')
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case LOGIN_USER_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload)
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
