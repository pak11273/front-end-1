import "./App.css";

import Home from "./components/Home";
import Home from "./Home";
import Login from "./components/Login";
import Login from "./Login";
import LoginForm from "./components/LoginForm";
import React from "react";
import React from "react";
import { Route } from "react-router-dom";
import { Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignUp from "./SignUp";
import axios from "axios";

function App() {
  // import DisplayPage from "./components/DisplayPage";
  // import EditRecipe from "./components/EditRecipe";

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
