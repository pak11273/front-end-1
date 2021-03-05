import React from 'react'
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom'
import { connect } from "react-redux";
import { userLogout } from '../actions/index'

const NavBar = ({isLoggedIn, userLogout}) => {
  const history = useHistory()


  const handleLogout = (e) => {
    e.preventDefault()
    
    userLogout()
    history.push('/')
    console.log('lgout')

  }
  
  if(isLoggedIn){
    return(
      <NavStyle>
      <div>
        <TitleStyle>Secret Food Recipes!</TitleStyle>
      </div>
      <LinksStyle>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div>
          <button onClick={handleLogout}>logout</button>
        </div>
      </LinksStyle>
    </NavStyle>
    )
  }

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

const mapStateToProps = state => {
  console.log(state)
  return({
    isLoggedIn: state.userReducer.isLoggedIn
  })
}

export default connect(mapStateToProps,{userLogout})(NavBar);


const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 5rem;
  background-color: ${pr => pr.theme.primaryColor};

  a{
    text-decoration: none;
    padding: 0 5px;
  }
`;
const TitleStyle = styled.p`
  color: ${pr => pr.theme.fontColor};
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
