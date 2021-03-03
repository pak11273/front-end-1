import {
  EDIT_RECIPE_FAIL,
  EDIT_RECIPE_START,
  EDIT_RECIPE_SUCCESS,
  FETCH_RECIPES_FAIL,
  FETCH_RECIPES_START,
  FETCH_RECIPES_SUCCESS,
  SEARCH_RECIPES_FAIL,
  SEARCH_RECIPES_START,
  SEARCH_RECIPES_SUCCESS,
} from "../consts/index";

const token = localStorage.getItem("token");

const initialState = {
  search: "",
  recipes: "",
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
    case FETCH_RECIPES_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        isLoading: false,
      };
    case FETCH_RECIPES_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SEARCH_RECIPES_START:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        isLoading: false,
      };
    case SEARCH_RECIPES_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
