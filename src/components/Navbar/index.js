import { LinksStyle, StyledNavbar, TitleStyle } from "./styled";
import { NavLink, useHistory } from "react-router-dom";

import React from "react";
import { connect } from "react-redux";
import { userLogout } from "../../actions/index";

const ConnectedNavbar = ({ isLoggedIn, userLogout }) => {
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();

    userLogout();
    history.push("/");
  };

  if (isLoggedIn) {
    return (
      <StyledNavbar>
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
      </StyledNavbar>
    );
  }

  return (
    <StyledNavbar>
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
    </StyledNavbar>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
  };
};

export const Navbar = connect(mapStateToProps, { userLogout })(ConnectedNavbar);
