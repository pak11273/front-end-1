import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: ${(pr) => pr.padding};
`;
