import "./App.css";

import DisplayPage from "./components/DisplayPage";
import EditRecipe from "./components/EditRecipe";
import Home from "./Home";
import Login from "./components/Login";
import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard"

const token = localStorage.getItem("token");

function App() {
  // import DisplayPage from "./components/DisplayPage";
  // import EditRecipe from "./components/EditRecipe";

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/login" render={() => (token ? <Home /> : <Login />)} />
      <Route path="/signup" component={SignUp} />
      <Route path="/edit" component={EditRecipe} />
      <Route path="/display" component={DisplayPage} />
      <Route path="/dashboard" component={Dashboard} />

    </div>
  );
}

export default App;
