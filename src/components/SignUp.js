import * as yup from "yup";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { registerUser } from "../actions";
import signupSchema from "./signupSchema";

const initialFormValues = {
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const initialDisabled = true;

const SignUp = (props) => {
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
    };

    props.registerUser(signupSubmit);
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
      {props.error && props.error ? (
        <div style={{ color: "red" }}>{props.error}</div>
      ) : null}

      <div>
        <Link to="/">no sign up pls</Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return {
    error: userReducer.error,
    isRegistered: userReducer.isRegistered,
  };
};

export default connect(mapStateToProps, { registerUser })(SignUp);
