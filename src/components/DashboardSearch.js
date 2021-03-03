import React from "react";

export default function DashboardSearchForm(props) {
  const { values, submit, change, disabled } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <form className="dashboard-search-container" onSubmit={onSubmit}>
      <label>
        Search Bar
        <input
          value={values.title}
          onChange={onChange}
          name="search"
          type="text"
        />
      </label>
      <button disabled={disabled}>Search</button>
    </form>
  );
}
