import {
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
  DELETE_RECIPE
} from "../consts";

import axios from "axios";
import { axiosWithAuth } from "../auth/axiosWithAuth";

// PUT /recipe/:id
// Update Recipe
// Required fields:
const exampleRecipe = {
  title: "Recipe Title",
  category: "category",
  source: "Recipe Source",
  ingredients: "All ingredients",
  instructions: "All instructions",
};

export const editRecipe = (recipe, history) => (dispatch) => {
  dispatch({ type: EDIT_RECIPE_START });
  axiosWithAuth()
    .put(
      `https://family-recipes-cookbook.herokuapp.com/recipe/${recipe.recipe_id}`,
      recipe
    )
    .then((res) => {
      dispatch({ type: EDIT_RECIPE_SUCCESS, payload: res.data });
      history.push("/dashboard");
    })
    .catch((err) => {
      dispatch({
        type: EDIT_RECIPE_FAIL,
        payload: err.response.data.message,
      });
    });
};

export const deleteRecipe = (recipe, history) => (dispatch) => {
  dispatch({ type: DELETE_RECIPE_START });
  axiosWithAuth()
    .delete(
      `https://family-recipes-cookbook.herokuapp.com/recipe/${recipe.recipe_id}`,
      recipe
    )
    .then((res) => {
      dispatch({ type: DELETE_RECIPE_SUCCESS, payload: res.data });
      history.push("/dashboard");
    })
    .catch((err) => {
      dispatch({
        type: DELETE_RECIPE_FAIL,
        // payload: err.response.data.message,
        payload: "Server Error: could not delete resource",
      });
    });
};

export const fetchRecipes = (recipes) => (dispatch) => {
  dispatch({ type: FETCH_RECIPES_START });
  axiosWithAuth()
    .get("/recipe/recipes", recipes)
    .then((res) => {
      dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_RECIPES_FAIL,
        payload: err.response.data.message,
      });
    });
};

export const fetchRecipesById = (id) => (dispatch) => {
  dispatch({ type: FETCH_RECIPES_BY_ID_START });
  axiosWithAuth()
    .get(`/user/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_RECIPES_BY_ID_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_RECIPES_BY_ID_FAIL,
        payload: err.response.data.message,
      });
    });
};

// GET /recipe/?=$titleORcategory
// Get Recipe by Searching for Title or Category
// Requires: replace $titleORcategory with desired search (ex. pizza, piz, dinner, din)

// Returns Array of Recipes that contain desired search input

export const searchRecipes = (search) => (dispatch) => {
  dispatch({ type: EDIT_RECIPE_START });
  axiosWithAuth()
    .get(`/recipe/?search=${search}`)
    .then((res) => {
      dispatch({ type: SEARCH_RECIPES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: SEARCH_RECIPES_FAIL,
        payload: err.response.data.message,
      });
    });
};

export const loadRecipeToEdit = (recipe, history) => {
  return {
    type: LOAD_RECIPE_TO_EDIT_START,
    payload: recipe,
  };
};


