import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const StyledHome = styled.div`
    background-color: ${pr => pr.theme.lightestColor};
    padding: ${pr => pr.theme.padding.backgroundPadding};

    text-align: center;

    img {
        width: 50%;
        border: 5px solid black;
    }
`;

const Home = () => {

    return(
            <StyledHome>
                <div class='home'>
                    <h1>Secret Family Recipe</h1>
                    <p>Store your personal recipes on the Internet</p>
                    <div class='links-div'>
                        <Link to="/login">Log In</Link> <Link to="/signup">Sign Up</Link>
                    </div>
                    <div class='screenshot-div'><img src='/dashboard-screenshot.jpg'/></div>
                </div>
            </StyledHome>
    )
    }
    
export default Home
