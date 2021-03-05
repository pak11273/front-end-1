import React from "react";
import styled from "styled-components";

const StyledSignUpForm = styled.form`
  color: ${(pr) => pr.theme.fontColor};
  font-size: ${(pr) => pr.theme.fontSize.medium};
  font-weight: bold;
  background-color: ${(pr) => pr.theme.tertiaryColor};
  display: ${(pr) => pr.theme.display};
  justify-content: ${(pr) => pr.theme.justifyContent};
  flex-wrap: ${(pr) => pr.theme.flexWrap};
  border-radius: ${(pr) => pr.theme.borderRadius};

  h2 {
    font-size: ${(pr) => pr.theme.fontSize.large};
    white-space: ${(pr) => pr.theme.whiteSpace};
    color: ${(pr) => pr.theme.fontColor};
    background-color: ${(pr) => pr.theme.secondaryColor};
    padding: 5%;
  }
  input {
    height: ${(pr) => pr.theme.input.height};
    width: ${(pr) => pr.theme.input.width};
    border-radius: ${(pr) => pr.theme.input.borderRadius};
  }
  button {
    color: ${(pr) => pr.theme.fontColor};
    padding: ${(pr) => pr.theme.padding.buttonPadding};
    font-size: ${(pr) => pr.theme.fontSize.button};
    margin: ${(pr) => pr.theme.margin.button};
    white-space: ${(pr) => pr.theme.whiteSpace};
    background-color: ${(pr) => pr.theme.primaryColor};
    border-radius: ${(pr) => pr.theme.input.borderRadius};
  }

  span {
    color: ${(pr) => pr.theme.errorColor};
    font-size: ${(pr) => pr.theme.fontSize.small};
    white-space: ${(pr) => pr.theme.whiteSpace};
  }
`;

export default function SignUpForm({
  values,
  change,
  submit,
  disabled,
  errors,
}) {
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };
  return (
    <StyledSignUpForm className="signupformcontainer" onSubmit={onSubmit}>
      <h2>Member Sign Up</h2>
      <div>
        <label>
          Username
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>
        <p>{errors.username}</p>

        <label>
          First Name
          <input
            value={values.firstname}
            onChange={onChange}
            name="firstname"
            type="text"
          />
        </label>
        <p>{errors.firstname}</p>

        <label>
          Last Name
          <input
            value={values.lastname}
            onChange={onChange}
            name="lastname"
            type="text"
          />
        </label>
        <p>{errors.lastname}</p>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>
        <p>{errors.email}</p>

        <label>
          Password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>
        <p>{errors.password}</p>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    </StyledSignUpForm>
  );
}
