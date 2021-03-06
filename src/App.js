import "./App.css";

import { Home, Navbar } from "components";

import Dashboard from "./components/Dashboard";
import DisplayPage from "./components/DisplayPage";
import EditRecipe from "./components/EditRecipe";
import Login from "./components/Login";
import New from "./components/New";
import PrivateRoute from "./components/PrivateRoute";
import React from "react";
import { Route } from "react-router-dom";
import SignUp from "components/SignUp";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route
        render={(props) => {
          return props.location.pathname !== "/" && <Navbar />;
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
