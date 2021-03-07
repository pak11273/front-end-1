import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  deleteRecipe,
  fetchRecipesById,
  loadRecipeToEdit,
  searchRecipes,
} from "../../actions/recipeActions";

import DashboardSearchForm from "./DashboardSearch";
import { connect } from "react-redux";
import { StyledDashboard } from "./styled";

const initialFormValues = {
  title: "",
  category: "",
  source: "",
  ingredients: "",
  instructions: "",
  search: "",
};

function ConnectedDashboard({
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
  }, [fetchRecipesById, user.user_id, recipe]);

  const formSubmit = (value) => {
    // Form submited
    searchRecipes(value);
  };

  const handleEditClick = (e, recipe) => {
    e.preventDefault();
    loadRecipeToEdit(recipe);
    history.push("/edit");
  };

  const handleDisplayClick = (e, recipe) => {
    e.preventDefault();
    loadRecipeToEdit(recipe);
    history.push("/display");
  };

  const handleDelete = (e, recipe) => {
    e.preventDefault();
    deleteRecipe(recipe, history);
  };

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <StyledDashboard>
      <h2>Family Recipes</h2>

      <div className="dashboard-content">
        <div className="dashboard-sidebar">
          <DashboardSearchForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
          />
          <div>
            <button onClick={() => history.push("/new")}>Add New</button>
          </div>
        </div>
        <div className="recipe-hub">
          {recipes &&
            recipes.map((recipe) => (
              <div className="recipe-card-container" key={recipe.id}>
                <h2>{recipe.title}</h2>
                <p>{recipe.category}</p>
                <p>{recipe.source}</p>

                <div className="recipe-card-links">
                  <Link to="/edit" onClick={(e) => handleEditClick(e, recipe)}>
                    Edit Recipe
                  </Link>
                  <Link to="/delete" onClick={(e) => handleDelete(e, recipe)}>
                    Delete Recipe
                  </Link>
                  <Link
                    to="/display"
                    onClick={(e) => handleDisplayClick(e, recipe)}
                  >
                    Display Recipe
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </StyledDashboard>
  );
}

const mapStateToProps = ({ recipeReducer, userReducer }) => {
  return {
    user: userReducer.user,
    recipes: recipeReducer.recipes,
    recipe: recipeReducer.recipe,
  };
};

export const Dashboard = connect(mapStateToProps, {
  searchRecipes,
  deleteRecipe,
  fetchRecipesById,
  loadRecipeToEdit,
})(ConnectedDashboard);
