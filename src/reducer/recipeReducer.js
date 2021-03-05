import {
  DELETE_RECIPE,
  DELETE_RECIPE_FAIL,
  DELETE_RECIPE_START,
  DELETE_RECIPE_SUCCESS,
  EDIT_RECIPE_FAIL,
  EDIT_RECIPE_START,
  EDIT_RECIPE_SUCCESS,
  FETCH_RECIPES_BY_ID_FAIL,
  FETCH_RECIPES_BY_ID_START,
  FETCH_RECIPES_BY_ID_SUCCESS,
  FETCH_RECIPES_FAIL,
  FETCH_RECIPES_START,
  FETCH_RECIPES_SUCCESS,
  LOAD_RECIPE_TO_EDIT_FAIL,
  LOAD_RECIPE_TO_EDIT_START,
  LOAD_RECIPE_TO_EDIT_SUCCESS,
  SEARCH_RECIPES_FAIL,
  SEARCH_RECIPES_START,
  SEARCH_RECIPES_SUCCESS,
} from "../consts/index";

// const token = localStorage.getItem("token");

const initialState = {
  search: "",
  recipes: "",
  recipeToEdit: "",
  error: "",
  isLoading: "",
  successfulEdit: false,
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_RECIPE_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        recipe: action.payload,
        isLoading: false,
        successfulEdit: true,
      };
    case DELETE_RECIPE_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
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
    case FETCH_RECIPES_BY_ID_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_RECIPES_BY_ID_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        isLoading: false,
      };
    case FETCH_RECIPES_BY_ID_FAIL:
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
    case LOAD_RECIPE_TO_EDIT_START:
      return {
        ...state,
        recipe: action.payload,
        isLoading: true,
      };
    case LOAD_RECIPE_TO_EDIT_SUCCESS:
      return {
        ...state,
        recipe: action.payload,
        isLoading: false,
      };
    case LOAD_RECIPE_TO_EDIT_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case DELETE_RECIPE:
      console.log(state, action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};
