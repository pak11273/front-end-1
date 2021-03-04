import * as yup from "yup";

import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  fetchRecipesById,
  loadRecipeToEdit,
  searchRecipes,
} from "../actions/recipeActions";

import DashboardSearchForm from "./DashboardSearch";
import { connect } from "react-redux";
import { deleteRecipe } from "../actions/recipeActions";

const initialFormValues = {
  title: "",
  category: "",
  source: "",
  ingredients: "",
  instructions: "",
  search: "",
};

function Dashboard({
  user,
  deleteRecipe,
  fetchRecipesById,
  searchRecipes,
  loadRecipeToEdit,
  recipes,
  recipe,
}) {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    fetchRecipesById(user.user_id);
  }, [user.user_id, recipe]);

  const formSubmit = (value) => {
    // Form submited
    searchRecipes(value);
  };

  const handleEditClick = (e, recipe) => {
    e.preventDefault();
    loadRecipeToEdit(recipe);
    history.push("/edit");
  };

  const handleDelete = (e, recipe) => {
    e.preventDefault();
    deleteRecipe(recipe, history);
  };

  const inputChange = (name, value) => {
    // yup.reach(name)
    //   .validate(value)
    //   .then(() => {
    //     setFormErrors({...formErrors, [name]: ''})
    //   })
    //   .catch(err => {
    //     setFormErrors({...formErrors, [name]: err.errors[0]})
    //   })
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="dashboard-content">
        <div className="recipe-hub">
          {recipes &&
            recipes.map((recipe) => (
              <div className="recipe-card-container" key={recipe.id}>
                <h2>{recipe.title}</h2>
                <p>{recipe.category}</p>
                <p>{recipe.source}</p>

                <Link to="/edit" onClick={(e) => handleEditClick(e, recipe)}>
                  Edit Recipe
                </Link>
                <Link to="/delete" onClick={(e) => handleDelete(e, recipe)}>
                  Delete Recipe
                </Link>
                <Link
                  to={{
                    pathname: "/display",
                    recipe: recipe,
                  }}
                >
                  Display Recipe
                </Link>
              </div>
            ))}
        </div>

        <DashboardSearchForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
        />

        <button onClick={() => history.push("/new")}>Add New</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ recipeReducer, userReducer }) => {
  return {
    user: userReducer.user,
    recipes: recipeReducer.recipes,
    recipe: recipeReducer.recipe,
  };
};

export default connect(mapStateToProps, {
  searchRecipes,
  deleteRecipe,
  fetchRecipesById,
  loadRecipeToEdit,
})(Dashboard);
