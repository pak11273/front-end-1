import styled from "styled-components";

export const StyledNavbar = styled.nav`
  #home {
    color: ${(pr) => pr.theme.fontColor};
    color: white;
    text-transform: uppercase;
    letter-spacing: 1%;
    font-size: 1.8rem;
  }

  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 5rem;
  background-color: ${(pr) => pr.theme.brand};

  a,
  button {
    text-decoration: none;
    padding: 8px 12px;
    color: rgb(200 88 40);
    font-size: 12px;
    background: none !important;
    border: none;
    text-transform: uppercase;
    /*input has OS specific font-family*/
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    transition: ease-in 500ms all;

    &:hover {
      background-color: orange !important;
      color: ${(pr) => pr.theme.brand};
    }
  }

  .active {
    color: #fff;
  }
`;
export const TitleStyle = styled.p`
  color: ${(pr) => pr.theme.fontColor};
  color: white;
  text-transform: uppercase;
  letter-spacing: 1%;
  font-size: 1.8rem;
`;

export const LinksStyle = styled.ul`
  display: flex;
  font-size: 1.8rem;

  justify-content: space-between;

  ::marker {
    display: none;
  }
`;
