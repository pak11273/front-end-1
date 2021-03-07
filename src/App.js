import { Dashboard, Home, Login, Navbar, Signup } from "components";

import DisplayPage from "./components/DisplayPage";
import EditRecipe from "./components/EditRecipe";
import New from "./components/New";
import PrivateRoute from "./components/PrivateRoute";
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route
        render={(props) => {
          return props.location.pathname !== "/" && <Navbar />;
        }}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

      {/* Must be logged in to access these pages */}
      <PrivateRoute exact path="/edit" component={EditRecipe} />
      <PrivateRoute path="/new" component={New} />
      <PrivateRoute path="/display" component={DisplayPage} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default connect(null, {})(App);
