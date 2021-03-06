import React from "react";
import { StyledButton } from "./styled";

export const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
