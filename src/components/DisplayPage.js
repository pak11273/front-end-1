import { Link, useHistory, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { deleteRecipe } from "../actions/recipeActions";
import { loadRecipeToEdit } from "../actions/recipeActions";
import styled from "styled-components";

//styling start
const StyledDisplayPage = styled.div`
  color: ${(pr) => pr.theme.fontColor};
  font-size: ${(pr) => pr.theme.fontSize.medium};
  font-weight: ${(pr) => pr.theme.fontWeight};
  font-family: ${(pr) => pr.theme.fontFamily};
  border-radius: ${(pr) => pr.theme.borderRadius};

  .links {
    color: ${(pr) => pr.theme.fontColor};
    padding: ${(pr) => pr.theme.padding.buttonPadding};
    font-size: ${(pr) => pr.theme.fontSize.button};
    margin: ${(pr) => pr.theme.margin.button};
    white-space: ${(pr) => pr.theme.whiteSpace};
    background-color: ${(pr) => pr.theme.secondaryColor};
    border-radius: ${(pr) => pr.theme.input.borderRadius};
    display: flex;
    justify-content: space-between;
  }
`;
//styling end

function DisplayPage(props) {
  const initialState = {
    title: "",
    category: "",
    source: "",
    ingredients: "",
    instructions: [],
    user_id: "",
    error: "",
  };
  const [recipe, setRecipe] = useState(initialState);
  const history = useHistory();

  const ingredientsArray = recipe.ingredients.split(",");

  useEffect(() => {
    setRecipe(props.recipe);
  }, [props.recipe]);

  const handleDelete = (e, recipe) => {
    e.preventDefault();
    props.deleteRecipe(recipe, history);
  };

  const handleEditClick = (e, recipe) => {
    e.preventDefault();
    loadRecipeToEdit(recipe);
    history.push("/edit");
  };

  return (
    <StyledDisplayPage>
      {/* the links on the following line should be replaced with React Links once routing is set up */}
      <div className="links">
        <Link to="/edit" onClick={(e) => handleEditClick(e, recipe)}>
          Edit Recipe
        </Link>

        {props.error && <div style={{ color: "red" }}>{props.error}</div>}
        <Link to="/delete" onClick={(e) => handleDelete(e, recipe)}>
          Delete Recipe
        </Link>
      </div>
      <h1>{recipe.title}</h1>

      <p>
        categories: <em>{recipe.category}</em>
      </p>
      <p>source: {recipe.source}</p>
      <h2>Ingredients</h2>
      <ul>
        {ingredientsArray.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
      <h2>Directions</h2>
      <p>{recipe.instructions}</p>
    </StyledDisplayPage>
  );
}

const mapStateToProps = ({ recipeReducer }) => {
  return {
    error: recipeReducer.error,
    recipe: recipeReducer.recipe,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    deleteRecipe,
    loadRecipeToEdit,
  })(DisplayPage)
);
