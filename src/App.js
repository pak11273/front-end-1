
import React from "react";
import {Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import './App.css';
import LoginForm from './components/LoginForm'

import axios from 'axios'

function App() {









  return (
    <div className="App">





      

      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>

    </div>
  );
}

export default App;
