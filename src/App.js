import React from "react";
import {Route} from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import './App.css';

import DisplayPage from './components/DisplayPage'
import EditRecipe from './components/EditRecipe'

function App() {

  return (
    <div className="App">
      
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/edit" component={EditRecipe}/>
      <Route path="/display" component={DisplayPage}/>
    </div>
  );
}

export default App;
