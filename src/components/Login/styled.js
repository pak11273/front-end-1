import styled from "styled-components";
import thumb04 from "assets/images/thumbs/04.jpg";

export const StyledLogin = styled.div`
  padding: ${(pr) => pr.theme.padding.backgroundPadding};
`;

export const StyledLink = styled.div`
  color: ${(pr) => pr.theme.fontColor};
  font-size: ${(pr) => pr.theme.fontSize.button};
  white-space: ${(pr) => pr.theme.whiteSpace};
  background-color: ${(pr) => pr.theme.lightestColor};
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  background-color: ${(pr) => pr.theme.tertiaryColor};
  border-radius: 5px;
  max-width: 800px;
  margin: 0 auto;

  header {
    display: flex;
    background-color: ${(pr) => pr.theme.secondaryColor};
    background: url(${thumb04}) no-repeat center/cover;
    border-radius: 5px 5px 0 0;
    padding: 10%;

    img {
      display: inherit;
      position: absolute;
      width: 10%;
    }
  }

  h2 {
    color: white;
    text-align: center;
  }

  section {
    margin: 0 auto;
    color: white;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 30px 0 50px;
    width: 100%;
    input {
      width: 100%;
    }
    button {
      margin-top: 30px;
    }
  }

  span {
    color: ${(pr) => pr.theme.errorColor};
    font-size: ${(pr) => pr.theme.fontSize.small};
    white-space: ${(pr) => pr.theme.whiteSpace};
  }

  @media (min-width: 580px) {
    flex-flow: row;
    header {
      justify-content: center;
      align-items: center;
      line-height: 8em;
    }
    section {
      margin: 50px auto;
    }
  }
`;
