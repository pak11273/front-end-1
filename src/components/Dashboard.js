
import styled from 'styled-components';

import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  fetchRecipesById,
  loadRecipeToEdit,
  searchRecipes,
  deleteRecipe
} from "../actions/recipeActions";

import DashboardSearchForm from "./DashboardSearch";
import { connect } from "react-redux";


const StyledDashboard = styled.div`
  background-color: ${pr => pr.theme.lightestColor};
  padding: 5%;

  h1 {
    text-align: center;
    font-size: ${pr => pr.theme.fontSize.large};
  }

  .dashboard-sidebar {
    left: 0;
    width: 30%;
    background-color: ${pr => pr.theme.tertiaryColor};
    position: absolute;
    padding: 10px;
    margin-left: 10px;

    > * {
      display: flex;
      justify-content: space-evenly;
      margin: 10px;
    }
  }

  .dashboard-content {
    margin-left: 30%;
  }

  .recipe-card-container {
    background-color: ${pr => pr.theme.secondaryColor};
    border-radius: ${pr => pr.theme.borderRadius};
    padding: 20px;
    margin: 20px;


  }

  .recipe-card-links {
    display: flex;
    justify-content: space-between;
  }
`;

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
    <StyledDashboard className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="dashboard-content">
        <div className="dashboard-sidebar">
          <DashboardSearchForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          />
          <div><button onClick={() => history.push("/new")}>Add New</button></div>
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
  console.log(recipeReducer, userReducer)
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
  deleteRecipe
})(Dashboard);
