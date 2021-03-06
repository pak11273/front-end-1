import * as yup from "yup";

import React, { useEffect, useState } from "react";

import { Container } from "components";
import { SignUpForm } from "./form";
import { connect } from "react-redux";
import { registerUser } from "../../actions/index";
import signupSchema from "./signupSchema";
import { useHistory } from "react-router-dom";

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

function ConnectedSignup({ error, registerUser }) {
  const history = useHistory();
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
    // Post request towards the server
    registerUser(signupSubmit);
    if (error) {
      setFormErrors();
      setFormErrors({ ...formErrors, [error.name]: error.message });
    } else {
      history.push("/login");
    }
  };

  const inputChange = (name, value) => {
    // Validating forum first then pluggin in the values
    yup
      .reach(signupSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    // Plugging in values into FORMVALUES
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    signupSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <Container padding="2em">
      <SignUpForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </Container>
  );
}

const mapStateToProps = ({ userReducer }) => {
  return {
    error: userReducer.error,
  };
};

export const Signup = connect(mapStateToProps, { registerUser })(
  ConnectedSignup
);
