import * as yup from "yup";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import loginSchema from "./loginSchema";
import { loginUser } from "../actions";

const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};

const initialDisabled = true;

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const loginSubmit = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };

    props.loginUser(loginSubmit);

    // If error length is 0 bush the dashbaord
    props.error.length === 0
      ? props.history.push("/dashboard")
      : console.log("false", props.error.length);
  };

  useEffect(() => {
    loginSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="login">
      <h1>.</h1>

      <LoginForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      <div>
        {props.error && <div style={{ color: "red" }}>{props.error}</div>}
        <Link to="/">no log in thx</Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return {
    error: userReducer.error,
  };
};

export default connect(mapStateToProps, { loginUser })(Login);
