import React from "react";
import {Link} from "react-router-dom";

const Home = () => {

    return(
            <div>
                <h1>Secret Family Recipe</h1>
                <p>Store your personal recipes on the Internet</p>
                <div class='.links-div'>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
                <img src='/dashboard-screenshot.jpg'/>
            </div>
    )
    }
    
export default Home
