import { Link } from "react-router-dom";
import React from "react";
import { StyledHome } from "./styled";

const Home = () => {
  return (
    <StyledHome>
      <div className="home">
        <h1>Secret Family Recipe</h1>
        <p>Store your personal recipes on the Internet</p>
        <div className="links-div">
          <Link to="/login">Log In</Link> <Link to="/signup">Sign Up</Link>
        </div>
        <div className="screenshot-div">
          <img alt="dashboard screenshot" src="/dashboardScreenshot.jpg" />
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
