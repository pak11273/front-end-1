import "./App.css";

import Dashboard from "./components/Dashboard";
import DisplayPage from "./components/DisplayPage";
import EditRecipe from "./components/EditRecipe";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginForm from "./components/LoginForm";
import  NavBar  from "./components/NavBar";
import New from "./components/New";
import PrivateRoute from "./components/PrivateRoute";
import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./components/SignUp";

const token = localStorage.getItem("token");

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />

      {/* Must be logged in to access these pages */}
      <PrivateRoute exact path="/edit" component={EditRecipe} />
      <PrivateRoute path="/new" component={New} />
      <PrivateRoute path="/display" component={DisplayPage} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
