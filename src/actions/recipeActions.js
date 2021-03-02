import {
  EDIT_RECIPE_FAIL,
  EDIT_RECIPE_START,
  EDIT_RECIPE_SUCCESS,
} from "../consts";

import axios from "axios";

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
  axios
    .put(
      `https://family-recipes-cookbook.herokuapp.com/recipe/${recipe.recipe_id}`,
      recipe
    )
    .then((res) => {
      dispatch({ type: EDIT_RECIPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_RECIPE_FAIL,
        payload: err.response.data.message,
      });
    });
};
