import React from "react";
import {Link} from "react-router-dom";

const Home = () => {

    return(
        <div>
            <div>mama mia</div>
            <Link to="/login">login to seeya muh ma's recipe</Link>
            <br></br>
            <Link to="/signup">sign up or whateva</Link>
        </div>
    )
    }
    
export default Home