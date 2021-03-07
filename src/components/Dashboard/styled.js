import styled from "styled-components";

export const StyledDashboard = styled.div`
  padding: 5%;

  h2 {
    text-align: center;
  }
  p {
    color: ${(pr) => pr.theme.fontColor};
    font-weight: ${(pr) => pr.theme.fontWeight};
  }
  .dashboard-sidebar {
    left: 0;
    width: 30%;
    background-color: ${(pr) => pr.theme.tertiaryColor};
    position: absolute;
    padding: 10px;
    margin-left: 10px;

    > * {
      display: flex;
      justify-content: space-evenly;
      margin: 10px;
    }
  }

  .dashboard-content {
    margin-left: 30%;
  }

  .recipe-card-container {
    background-color: ${(pr) => pr.theme.secondaryColor};
    border-radius: ${(pr) => pr.theme.borderRadius};
    padding: 20px;
    margin: 20px;
  }

  .recipe-card-links {
    display: flex;
    justify-content: space-between;
  }
`;
