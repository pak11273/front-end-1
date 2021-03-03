import React from "react";

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
    <form className="loginformcontainer" onSubmit={onSubmit}>
      <div>
        <p>
          <label>
            Username
            <input
              value={values.username}
              onChange={onChange}
              name="username"
              type="text"
            />
          </label>
          <span className="error">{errors.username}</span>
        </p>
        <p>
          <label>
            Password
            <input
              value={values.password}
              onChange={onChange}
              name="password"
              type="password"
            />
          </label>
          <span className="error">{errors.password}</span>
        </p>
      </div>
      <button disabled={disabled}>Log In</button>
    </form>
  );
};

export default LoginForm;
