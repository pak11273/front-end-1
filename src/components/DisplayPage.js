import { Link, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

function DisplayPage(props) {
  const initialState = {
    title: "",
    category: "",
    source: "",
    ingredients: "",
    instructions: [],
    user_id: "",
  };
  const [recipe, setRecipe] = useState(initialState);

  const ingredientsArray = recipe.ingredients.split(",");

  useEffect(() => {
    setRecipe(props.history.location.recipe);
  }, []);

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
      <a href="/delete">Delete Recipe</a>
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

export default withRouter(connect(null, {})(DisplayPage));
