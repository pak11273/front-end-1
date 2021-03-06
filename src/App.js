import "./App.css";

import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import DisplayPage from "./components/DisplayPage";
import EditRecipe from "./components/EditRecipe";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import New from "./components/New";
import PrivateRoute from "./components/PrivateRoute";
import React from "react";
import SignUp from "components/SignUp";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route
        render={(props) => {
          console.log(props);
          return props.location.pathname !== "/" && <NavBar />;
        }}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />

      {/* Must be logged in to access these pages */}
      <PrivateRoute exact path="/edit" component={EditRecipe} />
      <PrivateRoute path="/new" component={New} />
      <PrivateRoute path="/display" component={DisplayPage} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
