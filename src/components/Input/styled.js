import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 10px;
  max-width: 100%;
  width: 80%;

  p {
    font-size: 1em;
    padding-bottom: 0.4em;
  }

  p:nth-child(3) {
    font-weight: 100;
    color: ${(pr) => pr.color || "red"};
  }
`;

export const StyledInput = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background: #f7f7f7;
  border-radius: 0.35em;
  border: solid 2px transparent;
  color: inherit;
  display: block;
  outline: 0;
  padding: 0 0.75em;
  text-decoration: none;

  color: #a2a2a2;
  font-family: "Source Sans Pro", Helvetica, sans-serif;

  ::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;
