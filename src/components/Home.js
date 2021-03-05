import React from "react";
import {Link} from "react-router-dom";
import logo from '../images/avatar.jpg'
import './Home.css'

const Home = () => {

    return(
        <div>

            {/* <!-- Header --> */}
			<header>
                
                <div className="inner">
                    <Link to="/">
                        <img src={logo} alt="avatar" />
                    </Link>
                    <h1>
                        <strong>Secret Family Recipes</strong>, the perfect spot for your recipes 
                    </h1>
                </div>

            </header>


        </div>
    )
}
    
export default Home
