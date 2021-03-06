import { Link, NavLink, useHistory } from "react-router-dom";
import { LinksStyle, StyledNavbar, TitleStyle } from "./styled";

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

  return (
    <StyledNavbar>
      <TitleStyle>
        <Link id="home" to="/">
          Secret Food Recipes!
        </Link>
      </TitleStyle>
      <LinksStyle>
        <NavLink activeClassName="active" to="/login">
          Login
        </NavLink>
        <NavLink activeClassName="active" to="/signup">
          Sign Up
        </NavLink>
        {isLoggedIn && <button onClick={handleLogout}>logout</button>}
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
