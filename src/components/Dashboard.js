import * as yup from "yup";

import React, { useEffect, useState } from "react";

function Dashboard({ user }) {
  const history = useHistory();
  const [recipes, setRecipes] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

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

  useEffect(() => {
    axiosWithAuth()
      .get(`/user/${user.user_id}`)
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [user]);

  console.log(user.user_id);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="dashboard-content">
        <div className="recipe-hub">
          {recipes.length < 0
            ? "no data"
            : recipes.map((recipe) => (
                <div className="recipe-card-container" key={recipe.id}>
                  <h2>{recipe.title}</h2>
                  <p>{recipe.category}</p>
                  <p>{recipe.source}</p>

                  {/* Links that will be routed correctly by unit 3 */}
                  <Link to="/">Edit Recipe</Link>
                  <Link to="/">Delete Recipe</Link>
                  <Link to="/">Display Recipe</Link>
                </div>
              ))}
        </div>

        <DashboardSearchForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
        />

        {/* <button onClick={() => history.push("/new")}>Add New</button> */}
      </div>
    </div>
  );
}

export default Dashboard;
