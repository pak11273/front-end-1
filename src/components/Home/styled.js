import styled from "styled-components";

export const StyledHome = styled.div`
  padding: ${(pr) => pr.theme.padding.backgroundPadding};

  text-align: center;

  div.actions a {
    margin: 30px auto;
    font-size: 1.3em;
  }

  img {
    width: 50%;
    border: 5px solid black;
  }
`;
