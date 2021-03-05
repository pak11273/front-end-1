import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { editRecipe } from "../actions/recipeActions";
import styled from "styled-components";

const StyledRecipeForm = styled.div`
  color: ${(pr) => pr.theme.fontColor};
  font-size: ${(pr) => pr.theme.fontSize.medium};
  background-color: ${(pr) => pr.theme.tertiaryColor};
  border-radius: ${(pr) => pr.theme.borderRadius};
  width: 50%;
  margin: 10px auto;
  padding: 20px;

  input {
    font-size: 0.8em;
    width: 40%;
  }
  textarea {
    width: 100%;
    font-size: 0.8em;
    height: 5em;
    resize: none;
  }
  button {
    color: ${(pr) => pr.theme.fontColor};
    padding: ${(pr) => pr.theme.padding.buttonPadding};
    white-space: ${(pr) => pr.theme.whiteSpace};
    background-color: ${(pr) => pr.theme.primaryColor};
    border-radius: ${(pr) => pr.theme.input.borderRadius};
    font-size: 1em;
  }
  p {
    text-align: center;
  }
  p.input-paragraph {
    text-align: right;
  }
`;

const StyledTitle = styled.div`
  text-align: center;
`;

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
  const history = useHistory();

  useEffect(() => {
    setFormState(props.recipe);
  }, [props.recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.editRecipe(formState, history);
  };

  return (
    <div>
      <StyledTitle>
        <h1>Edit Recipe</h1>
      </StyledTitle>
      <StyledRecipeForm>
        <form onSubmit={onSubmit}>
          <p className="input-paragraph">
            <label>
              Title:{" "}
              <input
                type="text"
                name="title"
                value={formState.title || ""}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="input-paragraph">
            <label>
              Categories (separate with commas):{" "}
              <input
                type="text"
                name="category"
                value={formState.category || ""}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="input-paragraph">
            <label>
              Source:{" "}
              <input
                type="text"
                name="source"
                value={formState.source || ""}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Ingredients (separate with commas): <br />
              <textarea
                name="ingredients"
                value={formState.ingredients || ""}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Instructions: <br />
              <textarea
                name="instructions"
                value={formState.instructions || ""}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="button-holder">
            <button>Submit</button>
          </p>
        </form>
      </StyledRecipeForm>
    </div>
  );
};

const mapToStateProps = ({ recipeReducer }) => {
  return {
    recipe: recipeReducer.recipe,
    error: recipeReducer.error,
    isLoading: recipeReducer.isLoading,
    successfulEdit: recipeReducer.successfulEdit,
  };
};

export default withRouter(connect(mapToStateProps, { editRecipe })(EditRecipe));
