import React from "react";
import {Link} from "react-router-dom";
import logo from '../images/thumbs/04.jpg'
import styled from 'styled-components'


const Home = () => {

    return(
        <HomePage>   

                    <h1>
                        <strong>Secret Food Recipes</strong>, the perfect spot for your recipes 
                    </h1>


        </HomePage>
    )
}
    
export default Home



const HomePage = styled.div`

    width: 100%,
    min-height: 100vh;

` 