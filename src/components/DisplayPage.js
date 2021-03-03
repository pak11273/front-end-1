import { Link, useHistory, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { deleteRecipe } from "../actions/recipeActions";

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
    setRecipe(props.history.location.recipe);
  }, []);

  const handleDelete = (e, recipe) => {
    e.preventDefault();
    props.deleteRecipe(recipe, history);
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      {/* the links on the following line should be replaced with React Links once routing is set up */}
      <Link
        to={{
          pathname: "/edit",
          recipe,
        }}
      >
        Edit Recipes
      </Link>
      {props.error && <div style={{ color: "red" }}>{props.error}</div>}
      <Link to="/delete" onClick={(e) => handleDelete(e, recipe)}>
        Delete Recipe
      </Link>
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
    </div>
  );
}

const mapStateToProps = ({ recipeReducer }) => {
  return {
    error: recipeReducer.error,
  };
};

export default withRouter(
  connect(mapStateToProps, { deleteRecipe })(DisplayPage)
);
