import "./index.css";

import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/Store";
import { ThemeProvider } from 'styled-components'
import theme from './components/Theme'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme = {theme}>
    <Router>
      <App />
    </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
