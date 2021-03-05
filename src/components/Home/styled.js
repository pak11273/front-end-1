import styled from "styled-components";

export const StyledHome = styled.div`
  background-color: ${(pr) => pr.theme.lightestColor};
  padding: ${(pr) => pr.theme.padding.backgroundPadding};

  text-align: center;

  img {
    width: 50%;
    border: 5px solid black;
  }
`;
