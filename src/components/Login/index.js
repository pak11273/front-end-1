import * as yup from "yup";

import { Button, Input } from "components";
import React, { useEffect, useState } from "react";

import { Container } from "components";
import { StyledLoginForm } from "./styled";
import { connect } from "react-redux";
import decorBar from "assets/images/DecorBar.png";
import loginSchema from "./loginSchema";
import { loginUser } from "../../actions";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  username: "test12",
  password: "test123",
};
const initialFormErrors = {
  username: "",
  password: "",
};

const initialDisabled = true;

const ConnectedLogin = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const history = useHistory();

  useEffect(() => {
    setDisabled(props.isLoading);
  }, [props.isLoading]);

  const inputChange = (e) => {
    const { name, value } = e.target;
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

  const formSubmit = (e) => {
    e.preventDefault();
    const trimmedLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };

    props.loginUser(trimmedLogin, history);
  };

  useEffect(() => {
    loginSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <Container padding="2em">
      <StyledLoginForm onSubmit={formSubmit}>
        <header>
          <h2>Member Login</h2>
          <img src={decorBar} alt="decorative bar" />
        </header>
        <section>
          <Input
            label={"username"}
            type="text"
            value={formValues.username}
            onChange={inputChange}
            name="username"
            errors={formErrors}
            color="#00ff1f"
          />
          <Input
            label={"password"}
            type="text"
            value={formValues.password}
            onChange={inputChange}
            name="password"
            errors={formErrors}
            color="#00ff1f"
          />
          {props.error && <div style={{ color: "#00ff1f" }}>{props.error}</div>}
          <Button sm color="white" disabled={disabled}>
            Log In
          </Button>
        </section>
      </StyledLoginForm>
    </Container>
  );
};

const mapStateToProps = ({ userReducer, isLoading }) => {
  return {
    error: userReducer.error,
    isLoading: userReducer.isLoading,
  };
};

export const Login = connect(mapStateToProps, { loginUser })(ConnectedLogin);
