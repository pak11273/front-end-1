import React from "react";
import { StyledContainer } from "./styled";

export const Container = (props) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};
