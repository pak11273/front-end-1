import React from "react";
import {Route} from 'react-router-dom';

import Home from "./components/Home";
import Login from "./components/Login";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import Header from './components/Header'
import Dashboard from './components/Dashboard'

import './App.css'

const token = localStorage.getItem("token");

function App() {
  // import DisplayPage from "./components/DisplayPage";
  // import EditRecipe from "./components/EditRecipe";

  return (
    <div className="App">

      <Header />

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
