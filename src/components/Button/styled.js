import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.4em 1.2em;
  border-radius: 5px;
  background: ${(pr) => pr.bg || pr.theme.brand};
  color: ${(pr) => pr.color || "white"};
  :hover {
    cursor: pointer;
    background: ${(pr) => pr.hover || null};
  }

  /* xxsmall */
  font-size: ${(pr) => pr.xxsm && ".2em"};
  /* xsmall */
  font-size: ${(pr) => pr.xsm && ".5em"};
  /* small */
  font-size: ${(pr) => pr.sm && "1em"};
  /* medium */
  font-size: ${(pr) => pr.md && "1.3em"};
  /* large */
  font-size: ${(pr) => pr.lg && "2em"};
  /* xlarge */
  font-size: ${(pr) => pr.xxl && "2.5em"};
  /* xxlarge */
  font-size: ${(pr) => pr.xxxl && "3em"};
  /* xxxlarge */
`;
