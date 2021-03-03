import React from "react";

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
    <form className="form container" onSubmit={onSubmit}>
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
    </form>
  );
}
