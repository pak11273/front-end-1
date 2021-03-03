import {
  EDIT_RECIPE_FAIL,
  EDIT_RECIPE_START,
  EDIT_RECIPE_SUCCESS,
  FETCH_RECIPES_FAIL,
  FETCH_RECIPES_START,
  FETCH_RECIPES_SUCCESS,
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

export const editRecipe = (recipe) => (dispatch) => {
  dispatch({ type: EDIT_RECIPE_START });
  axiosWithAuth()
    .put(
      `https://family-recipes-cookbook.herokuapp.com/recipe/${recipe.recipe_id}`,
      recipe
    )
    .then((res) => {
      console.log("res: ", res);
      dispatch({ type: EDIT_RECIPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_RECIPE_FAIL,
        payload: err.response.data.message,
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
