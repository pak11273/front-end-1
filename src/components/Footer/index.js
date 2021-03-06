/* eslint jsx-a11y/anchor-is-valid: "off" */

import React from "react";
import { StyledFooter } from "./styled";

export const Footer = () => {
  return (
    <StyledFooter id="footer">
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
            <a alt="a website image" href="#" className="icon brands fa-github">
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
    </StyledFooter>
  );
};
