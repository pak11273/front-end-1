import * as yup from "yup";

import React, { useEffect, useState } from "react";
import { fetchRecipes, searchRecipes } from "../actions/recipeActions";

import DashboardSearchForm from "./DashboardSearch";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const initialFormValues = {
  title: "",
  category: "",
  source: "",
  ingredients: "",
  instructions: "",
  search: "",
};

const Dashboard = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    props.fetchRecipes();
  }, []);

  // form syntax for the searchBar, unclear if it's needed
  const formSubmit = (value) => {
    props.searchRecipes(value);
    // const searchSubmit = {
    //   title: formValues.title.trim(),
    // };
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
  // no schema or validation yet
  // useEffect(() => {
  //   searchSchema.isValid(formValues).then(valid =>
  //     setDisabled(!valid))
  //   }, [formValues])

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {props.recipes &&
        props.recipes.map((recipe) => (
          <div className="recipe-card-container" key={recipe.recipe_id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.category}</p>
            <p>{recipe.source}</p>

            {/* Links that will be routed correctly by unit 3 */}
            <Link
              to={{
                pathname: "/edit",
                recipe,
              }}
            >
              Edit Recipes
            </Link>
            <Link to="/">Delete Recipe</Link>
            <Link
              to={{
                pathname: "/display",
                recipe,
              }}
            >
              Display Recipe
            </Link>
          </div>
        ))}

      <DashboardSearchForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
      />

      {/* <button onClick={() => history.push("/new")}>Add New</button> */}
    </div>
  );
};

const mapStateToProps = ({ recipeReducer }) => {
  return {
    recipes: recipeReducer.recipes,
  };
};

export default connect(mapStateToProps, { fetchRecipes, searchRecipes })(
  Dashboard
);
