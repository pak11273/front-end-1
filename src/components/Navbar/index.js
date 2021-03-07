import { Link, NavLink, useHistory } from "react-router-dom";
import { LinksStyle, StyledNavbar, TitleStyle } from "./styled";

import React from "react";
import { connect } from "react-redux";
import { userLogout } from "../../actions/index";

const ConnectedNavbar = ({ isLoggedIn, userLogout }) => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const handleLogout = (e) => {
    console.log("hi");
    e.preventDefault();
    userLogout();
    history.push("/login");
  };

  return (
    <StyledNavbar>
      <TitleStyle>
        <Link id="home" to="/">
          Secret Food Recipes!
        </Link>
      </TitleStyle>
      {!token ? (
        <LinksStyle>
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
          <NavLink activeClassName="active" to="/signup">
            Sign Up
          </NavLink>
        </LinksStyle>
      ) : (
        <>
          <NavLink activeClassName="active" to="/dashboard">
            My Recipes
          </NavLink>
          <button onClick={handleLogout}>Log out</button>
        </>
      )}
    </StyledNavbar>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return {
    isLoggedIn: userReducer.isLoggedIn,
  };
};

export const Navbar = connect(mapStateToProps, { userLogout })(ConnectedNavbar);
