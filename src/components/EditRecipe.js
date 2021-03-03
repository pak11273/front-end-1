import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { editRecipe } from "../actions/recipeActions";

const EditRecipe = (props) => {
  const initialState = {
    recipe_id: "",
    title: "",
    category: "",
    source: "",
    ingredients: "",
    instructions: "",
  };

  const [formState, setFormState] = useState(initialState);

  useEffect(() => {
    setFormState(props.history.location.recipe);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.editRecipe(formState);
  };

  return (
    <div>
      {props.successfulEdit && <Redirect to="/dashboardcopy" />}
      <h1>Edit Recipe</h1>
      <form onSubmit={onSubmit}>
        <p>
          <label>
            Title:{" "}
            <input
              type="text"
              name="title"
              value={formState.title}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Categories (separate with commas):{" "}
            <input
              type="text"
              name="category"
              value={formState.category}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Source:{" "}
            <input
              type="text"
              name="source"
              value={formState.source}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Ingredients (separate with commas): <br />
            <textarea
              name="ingredients"
              value={formState.ingredients}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Instructions: <br />
            <textarea
              name="instructions"
              value={formState.instructions}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  );
};

const mapToStateProps = ({ recipeReducer }) => {
  return {
    error: recipeReducer.error,
    isLoading: recipeReducer.isLoading,
    successfulEdit: recipeReducer.successfulEdit,
  };
};

export default withRouter(connect(mapToStateProps, { editRecipe })(EditRecipe));
