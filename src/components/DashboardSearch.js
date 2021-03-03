import React, { useState } from "react";

const DashboardSearchForm = (props) => {
  const initialValue = "";
  const { submit, disabled } = props;
  const [input, changeInput] = useState(initialValue);

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit(input);
  };

  const onChange = (evt) => {
    const { value } = evt.target;
    changeInput(value);
  };

  return (
    <form className="dashboard-search-container" onSubmit={onSubmit}>
      <label>
        Search Bar
        <input value={input} onChange={onChange} name="search" type="text" />
      </label>
      <button disabled={disabled}>Search</button>
    </form>
  );
};

export default DashboardSearchForm;
