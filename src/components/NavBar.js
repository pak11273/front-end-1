import { NavLink, useHistory } from "react-router-dom";

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { userLogout } from "../actions/index";

const NavBar = ({ isLoggedIn, userLogout }) => {
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();

    userLogout();
    history.push("/");
  };

  if (isLoggedIn) {
    return (
      <NavStyle>
        <div>
          <TitleStyle>Secret Food Recipes!</TitleStyle>
        </div>
        <LinksStyle>
          <div>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName="active" to="/dashboard">
              Dashboard
            </NavLink>
          </div>
          <div>
            <button onClick={handleLogout}>logout</button>
          </div>
        </LinksStyle>
      </NavStyle>
    );
  }

  return (
    <NavStyle>
      <div>
        <TitleStyle>Secret Food Recipes!</TitleStyle>
      </div>
      <LinksStyle>
        <div>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/signup">
            Sign Up
          </NavLink>
        </div>
      </LinksStyle>
    </NavStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
  };
};

export default connect(mapStateToProps, { userLogout })(NavBar);

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 5rem;
  background-color: ${(pr) => pr.theme.primaryColor};

  a,
  button {
    text-decoration: none;
    padding: 2px 5px;
    color: navy;
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
    }
  }

  .active {
    color: #fff;
  }
`;
const TitleStyle = styled.p`
  color: ${(pr) => pr.theme.fontColor};
  text-transform: uppercase;
  letter-spacing: 1%;
  font-size: 1.8rem;
  font-family: Arial, Helvetica, sans-serifs;
`;

const LinksStyle = styled.ul`
  display: flex;
  font-size: 1.8rem;
  font-family: Arial, Helvetica, sans-serifs;

  justify-content: space-between;

  ::marker {
    display: none;
  }
`;
