import styled from "styled-components";

export const StyledSignupForm = styled.form`
  color: ${(pr) => pr.theme.fontColor};
  font-size: ${(pr) => pr.theme.fontSize.medium};
  font-weight: bold;
  background-color: ${(pr) => pr.theme.tertiaryColor};
  display: ${(pr) => pr.theme.display};
  justify-content: ${(pr) => pr.theme.justifyContent};
  flex-wrap: ${(pr) => pr.theme.flexWrap};
  border-radius: ${(pr) => pr.theme.borderRadius};

  header {
    background: ${(pr) => pr.theme.brand};
  }

  h2 {
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
