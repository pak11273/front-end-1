import {
  EDIT_RECIPE_FAIL,
  EDIT_RECIPE_START,
  EDIT_RECIPE_SUCCESS,
} from "../consts/index";

const token = localStorage.getItem("token");

const initialState = {
  error: "",
  isLoading: "",
  successfulEdit: false,
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_RECIPE_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case EDIT_RECIPE_SUCCESS:
      return {
        ...state,
        recipe: action.payload,
        isLoading: false,
        successfulEdit: true,
      };
    case EDIT_RECIPE_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
