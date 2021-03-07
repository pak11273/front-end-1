import { Link, NavLink, useHistory } from "react-router-dom";
import { LinksStyle, StyledNavbar, TitleStyle } from "./styled";
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { userLogout } from "../../actions/index";

const ConnectedNavbar = ({ userLogout }) => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(token !== null);

  const handleLogout = (e) => {
    e.preventDefault();

    userLogout();
    history.push("/");
  };

  useEffect(() => {
    if (!token) {
      setIsLoggedIn(false);
    }
  }, [token]);

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

export const Navbar = connect(null, { userLogout })(ConnectedNavbar);
