/* eslint jsx-a11y/anchor-is-valid: "off" */

import "assets/css/main.css";

import { Footer } from "components";
import { Link } from "react-router-dom";
import React from "react";
import { StyledHome } from "./styled";

//images
const avatar = "assets/images/avatar.jpg";
const thumb01 = "assets/images/thumbs/01.jpg";

export const Home = () => {
  return (
    <StyledHome>
      <header id="header">
        <div className="inner">
          <a alt="a website image" href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Secret Family Recipes</strong>, your place for <br />
            generation after generation of tradition
            <br />
          </h1>
        </div>
      </header>
      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Anyone can go out and buy a cookbook these days,
              <br />
              but you want a place to store all your
              <br />
              secret family recipes,
              <br />
              handed down from generation to generation.
            </h2>
          </header>
          <p>
            The little cards grandma wrote her recipes on in her beautiful
            cursive are getting lost or are hard to read. You need somewhere
            secure to keep my recipes with me forever!
          </p>
          <ul className="actions">
            <li>
              <a alt="a website image" href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Some of our favorite recipes</h2>
          <div className="row">
            <article className="col-6 col-12-xsmall work-item">
              <a
                alt="a website image"
                href="../assets/images/thumbs/01.jpg"
                className="image fit thumb"
              >
                <img src={thumb01} alt="" />
              </a>
              <h3>Magna sed consequat tempus</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article className="col-6 col-12-xsmall work-item">
              <a
                alt="a website image"
                href="../assets/images/thumbs/02.jpg"
                className="image fit thumb"
              >
                <img src="../assets/images/thumbs/02.jpg" alt="" />
              </a>
              <h3>Ultricies lacinia interdum</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article className="col-6 col-12-xsmall work-item">
              <a
                alt="a website image"
                href="../assets/images/thumbs/03.jpg"
                className="image fit thumb"
              >
                <img src="../assets/images/thumbs/03.jpg" alt="" />
              </a>
              <h3>Tortor metus commodo</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article className="col-6 col-12-xsmall work-item">
              <a
                alt="a website image"
                href="../assets/images/thumbs/04.jpg"
                className="image fit thumb"
              >
                <img src="../assets/images/thumbs/04.jpg" alt="" />
              </a>
              <h3>Quam neque phasellus</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article className="col-6 col-12-xsmall work-item">
              <a
                alt="a website image"
                href="../assets/images/thumbs/05.jpg"
                className="image fit thumb"
              >
                <img src="../assets/images/thumbs/05.jpg" alt="" />
              </a>
              <h3>Nunc enim commodo aliquet</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
            <article className="col-6 col-12-xsmall work-item">
              <a
                alt="a website image"
                href="../assets/images/thumbs/06.jpg"
                className="image fit thumb"
              >
                <img src="../assets/images/thumbs/06.jpg" alt="" />
              </a>
              <h3>Risus ornare lacinia</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article>
          </div>
          <section>
            <div>Get Started today!</div>
          </section>
          <ul className="actions">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Register</Link>
            </li>
          </ul>
        </section>
      </div>
      <Footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                alt="a website image"
                href="#"
                className="icon brands fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                alt="a website image"
                href="#"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                alt="a website image"
                href="#"
                className="icon brands fa-dribbble"
              >
                <span className="label">Dribbble</span>
              </a>
            </li>
            <li>
              <a
                alt="a website image"
                href="#"
                className="icon solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </Footer>
    </StyledHome>
  );
};
