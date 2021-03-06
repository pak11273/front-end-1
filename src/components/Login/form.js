import { Button, Input } from "components";

import React from "react";
import { StyledLoginForm } from "./styled";
import decorBar from "assets/images/DecorBar.png";

const LoginForm = (props) => {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <StyledLoginForm className="loginformcontainer" onSubmit={onSubmit}>
      <header>
        <h2>Member Login</h2>
        <img src={decorBar} alt="decorative bar" />
      </header>
      <section>
        <Input
          label={"username"}
          type="text"
          value={values.username}
          onChange={onChange}
          name="username"
          errors={errors}
          color="#00ff1f"
        />
        <Input
          label={"password"}
          type="text"
          value={values.password}
          onChange={onChange}
          name="password"
          errors={errors}
          color="#00ff1f"
        />
        {props.error && <div style={{ color: "red" }}>{props.error}</div>}
        <Button sm color="white" disabled={disabled}>
          Log In
        </Button>
      </section>
    </StyledLoginForm>
  );
};

export default LoginForm;
