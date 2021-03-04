import styled from "styled-components";
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <NavStyle>
      <div>
        <TitleStyle>Secret Food Recipes!</TitleStyle>
      </div>
      <LinksStyle>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
      </LinksStyle>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 4vh;
  background-color: ${pr => pr.theme.primaryColor};
`;
const TitleStyle = styled.p`
  color: ${pr => pr.theme.fontColor};
  text-transform: uppercase;
  letter-spacing: 1%;
  font-size: 0.8em;
  font-family: Georgia;
`;

const LinksStyle = styled.ul`
  display: flex;
  font-size: 0.8em;
  justify-content: space-evenly;
  ::marker {
    display: none;
  }
`;
