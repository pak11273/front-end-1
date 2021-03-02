import React from "react";
import {Route} from 'react-router-dom';

import Home from "./components/Home";
import Login from "./components/Login";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";

function App() {
  // import DisplayPage from "./components/DisplayPage";
  // import EditRecipe from "./components/EditRecipe";

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      {/* <Route path="/edit" component={EditRecipe} />
      <Route path="/display" component={DisplayPage} /> */}
    </div>
  );
}

export default App;
