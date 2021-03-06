import { Button } from "components/Button";
import { Input } from "components/Input";
import React from "react";
import { StyledSignupForm } from "./styled";
import decorBar from "assets/images/DecorBar.png";

export function SignUpForm({ values, change, submit, disabled, errors }) {
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <StyledSignupForm onSubmit={onSubmit}>
      <header>
        <h2>Member Sign Up</h2>
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
          label={"firstname"}
          type="text"
          value={values.firstname}
          onChange={onChange}
          name="firstname"
          errors={errors}
          color="#00ff1f"
        />
        <Input
          label={"lastname"}
          type="text"
          value={values.lastname}
          onChange={onChange}
          name="lastname"
          errors={errors}
          color="#00ff1f"
        />
        <Input
          label={"email"}
          type="text"
          value={values.email}
          onChange={onChange}
          name="email"
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
        <Button sm color="white">
          Sign Up
        </Button>
      </section>
    </StyledSignupForm>
  );
}
