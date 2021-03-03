import styled from "styled-components";

export const NavBar = () => {
  return (
    <NavStyle>
      <div>
        <TitleStyle>Secret Food Recipes!</TitleStyle>
      </div>
      <LinksStyle>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
      </LinksStyle>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 4vh;
  background-color: wheat;
`;
const TitleStyle = styled.p`
  color: black;
  text-transform: uppercase;
  letter-spacing: 1%;
  font-size: 0.8em;
  font-family: Georgia;
`;

const LinksStyle = styled.ul`
  display: flex;
`;
