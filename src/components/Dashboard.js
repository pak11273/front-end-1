import * as yup from "yup";

import React, { useEffect, useState } from "react";

import DashboardSearchForm from "./DashboardSearch";
import { Link } from "react-router-dom";
import axios from "axios";

const initialFormValues = {
  // username: '',
  // firstname: '',
  // lastname: '',
  // email: '',
  // password: '',
  // title: '',
  // category: '',
  // source: '',
  // ingredients: '',
  // instructions: '',
  search: "",
};

function Dashboard() {
  const [formValues, setFormValues] = useState(initialFormValues);

  //data from api
  const recipes = [
    {
      title: "Chocolate Cake",
      category: "cake, dessert,chocolate",
      source: "online",
      ingredients: "chocolate, flour, eggs, sugar, milk",
      instructions:
        "mix flour, eggs, sugar, and milk, melt chocolate and mix in, then bake.",
      user_id: 1,
    },
    {
      title: "Pepperoni Pizza",
      category: "dinner, lunch",
      source: "me",
      ingredients: "dough, sauce, cheese, pepperoni",
      instructions: "spread dough, add sauce, cheese and pepperoni, bake",
      user_id: 2,
    },
    {
      title: "Turkey Dinner",
      category: "turkey, feast, dinner",
      source: "Grandma",
      ingredients: "turkey, veggies, ground turkey",
      instructions: "thaw turkey, and then go get grandma so she can do it.",
      user_id: 3,
    },
  ];
  // form syntax for the searchBar, unclear if it's needed
  const formSubmit = () => {
    const searchSubmit = {
      title: formValues.title.trim(),
    };

    axios
      .post("", searchSubmit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const inputChange = (name, value) => {
    console.log(formValues);
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
      {recipes.map((recipe) => (
        <div className="recipe-card-container" key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.category}</p>
          <p>{recipe.source}</p>

          {/* Links that will be routed correctly by unit 3 */}
          <Link
            to={{
              pathname: "/edit",
              state: formValues,
            }}
          >
            Edit Recipes
          </Link>
          <Link to="/">Delete Recipe</Link>
          <Link to="/">Display Recipe</Link>
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
}

export default Dashboard;
