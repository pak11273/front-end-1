import * as yup from "yup";

import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import loginSchema from "./loginSchema";
import { loginUser } from "../actions";
import styled from "styled-components";

//styling for Login function
const StyledLogin = styled.div`
  background-color: ${(pr) => pr.theme.lightestColor};
  padding: ${(pr) => pr.theme.padding.backgroundPadding};
`;
const StyledLink = styled.div`
  color: ${(pr) => pr.theme.fontColor};
  font-size: ${(pr) => pr.theme.fontSize.button};
  margin: ${(pr) => pr.theme.margin.button};
  white-space: ${(pr) => pr.theme.whiteSpace};
  background-color: ${(pr) => pr.theme.lightestColor};
`;

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
  const history = useHistory();
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

    props.loginUser(loginSubmit, history);

    // If error length is 0 bush the dashbaord
    props.error.length === 0
      ? props.history.push("/dashboard")
      : console.log("false", props.error.length);
  };

  useEffect(() => {
    loginSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <StyledLogin className="login">
      <div>
        <LoginForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />

        <StyledLink>
          {props.error && <div style={{ color: "red" }}>{props.error}</div>}
          <Link to="/">no log in thx</Link>
        </StyledLink>
      </div>
    </StyledLogin>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return {
    error: userReducer.error,
  };
};

export default connect(mapStateToProps, { loginUser })(Login);
