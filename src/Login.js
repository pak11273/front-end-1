import * as yup from "yup";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import axios from "axios";
import loginSchema from "./loginSchema";

const initialFormValues = {
  username: "",
  // firstname: '',
  // lastname: '',
  // email: '',
  password: "",
  // title: '',
  // category: '',
  // source: '',
  // ingredients: '',
  // instructions: '',
};
const initialFormErrors = {
  username: "",
  // firstname: '',
  // lastname: '',
  // email: '',
  password: "",
  // title: '',
  // category: '',
  // source: '',
  // ingredients: '',
  // instructions: '',
};

const initialDisabled = true;

export default function Login() {
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
      //firstname: formValues.firstname.trim(),
      //lastname: formValues.lastname.trim(),
      //email: formValues.email.trim(),
      password: formValues.firstname.trim(),
      // title: formValues.title.trim(),
      // category: formValues.category.trim(),
      // source: formValues.source.trim(),
      // ingredients: formValues.ingredients.trim(),
      // instructions: formValues.instructions.trim(),
    };
    axios
      .post("", loginSubmit)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
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
        <Link to="/">no log in thx</Link>
      </div>
    </div>
  );
}
