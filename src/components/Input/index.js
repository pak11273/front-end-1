import { StyledContainer, StyledInput } from "./styled";

import React from "react";

export const Input = ({
  color,
  label,
  value,
  onChange,
  type,
  name,
  errors,
}) => {
  return (
    <StyledContainer color={color}>
      <p>{label}</p>
      <StyledInput value={value} type={type} name={name} onChange={onChange} />
      <p>{errors[name]}</p>
    </StyledContainer>
  );
};
