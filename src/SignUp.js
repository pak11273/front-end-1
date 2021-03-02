import * as yup from "yup";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import axios from "axios";
import signupSchema from "./signupSchema";

const initialFormValues = {
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  title: "",
  category: "",
  source: "",
  ingredients: "",
  instructions: "",
};
const initialFormErrors = {
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  title: "",
  category: "",
  source: "",
  ingredients: "",
  instructions: "",
};

const initialDisabled = true;

export default function SignUp() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const formSubmit = () => {
    const signupSubmit = {
      username: formValues.username.trim(),
      firstname: formValues.firstname.trim(),
      lastname: formValues.lastname.trim(),
      email: formValues.email.trim(),
      password: formValues.firstname.trim(),
      title: formValues.title.trim(),
      category: formValues.category.trim(),
      source: formValues.source.trim(),
      ingredients: formValues.ingredients.trim(),
      instructions: formValues.instructions.trim(),
    };
    axios
      .post("", signupSubmit)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  const inputChange = (name, value) => {
    yup
      .reach(signupSchema, name)
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

  useEffect(() => {
    signupSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="signup">
      <h1>.</h1>

      <SignUpForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      <div>
        <Link to="/">no sign up pls</Link>
      </div>
    </div>
  );
}
