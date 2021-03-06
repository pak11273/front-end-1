import { createGlobalStyle, css } from "styled-components";

import { fontSizes } from "./_fontSizes";
import theme from "theme.js";

const reset = css`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const global = css`
  ${theme}
  * {
    box-sizing: border-box;
    font-family: "Times New Roman";
    max-width: 100%;
  }

  html {
    /* browser font-size is usually 16px */
    /* em relies on parent font-size */
    /* root font-size */
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.brand};
  }

  /* Form */
  form {
    margin: 0 0 2em 0;
  }

  label {
    color: #787878;
    display: block;
    font-size: 0.9em;
    font-weight: 400;
    margin: 0 0 1em 0;
  }

  select,
  textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: #f7f7f7;
    border-radius: 0.35em;
    border: solid 2px transparent;
    color: inherit;
    display: block;
    outline: 0;
    padding: 0 0.75em;
    text-decoration: none;
    width: 100%;
  }

  select {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23dfdfdf' /%3E%3C/svg%3E");
    background-size: 1.25rem;
    background-repeat: no-repeat;
    background-position: calc(100% - 1rem) center;
    height: 2.75em;
    padding-right: 2.75em;
    text-overflow: ellipsis;
  }

  select option {
    color: #787878;
    background: #fff;
  }

  select:focus::-ms-value {
    background-color: transparent;
  }

  select::-ms-expand {
    display: none;
  }

  textarea {
    padding: 0.75em;
  }

  input[type="text"]:invalid,
  input[type="password"]:invalid,
  input[type="email"]:invalid,
  select:invalid,
  textarea:invalid {
    box-shadow: none;
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  select {
    height: 2.35em;
  }

  input[type="text"]:focus,
  input[type="password"]:focus,
  input[type="email"]:focus,
  select:focus,
  textarea:focus {
    border-color: #49bf9d;
  }

  input[type="checkbox"],
  input[type="radio"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    display: block;
    float: left;
    margin-right: -2em;
    opacity: 0;
    width: 1em;
    z-index: -1;
  }

  input[type="checkbox"] + label,
  input[type="radio"] + label {
    text-decoration: none;
    color: #a2a2a2;
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    font-weight: 400;
    padding-left: 2.4em;
    padding-right: 0.75em;
    position: relative;
  }

  input[type="checkbox"] + label:before,
  input[type="radio"] + label:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    text-transform: none !important;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }

  input[type="checkbox"] + label:before,
  input[type="radio"] + label:before {
    background: #f7f7f7;
    border-radius: 0.35em;
    border: solid 2px transparent;
    content: "";
    display: inline-block;
    font-size: 0.8em;
    height: 2.0625em;
    left: 0;
    line-height: 1.85625em;
    position: absolute;
    text-align: center;
    top: 0;
    width: 2.0625em;
  }

  input[type="checkbox"]:checked + label:before,
  input[type="radio"]:checked + label:before {
    background: #787878;
    border-color: #787878;
    color: #fff;
    content: "\f00c";
  }

  input[type="checkbox"]:focus + label:before,
  input[type="radio"]:focus + label:before {
    border-color: #49bf9d;
  }

  input[type="checkbox"] + label:before {
    border-radius: 0.35em;
  }

  input[type="radio"] + label:before {
    border-radius: 100%;
  }

  ::-webkit-input-placeholder {
    color: #b2b2b2 !important;
    opacity: 1;
  }

  :-moz-placeholder {
    color: #b2b2b2 !important;
    opacity: 1;
  }

  ::-moz-placeholder {
    color: #b2b2b2 !important;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #b2b2b2 !important;
    opacity: 1;
  }
  /* eof Form */

  /* Button */

  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  .button {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s ease-in-out,
      color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
    background-color: transparent;
    border-radius: 0.35em;
    border: solid 3px #efefef;
    color: #787878 !important;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    height: 3.15em;
    height: calc(2.75em + 6px);
    line-height: 2.75em;
    min-width: 10em;
    padding: 0 1.5em;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
  }

  input[type="submit"]:hover,
  input[type="reset"]:hover,
  input[type="button"]:hover,
  .button:hover {
    border-color: #49bf9d;
    color: #49bf9d !important;
  }

  input[type="submit"]:active,
  input[type="reset"]:active,
  input[type="button"]:active,
  .button:active {
    background-color: rgba(73, 191, 157, 0.1);
    border-color: #49bf9d;
    color: #49bf9d !important;
  }

  input[type="submit"].icon,
  input[type="reset"].icon,
  input[type="button"].icon,
  .button.icon {
    padding-left: 1.35em;
  }

  input[type="submit"].icon:before,
  input[type="reset"].icon:before,
  input[type="button"].icon:before,
  .button.icon:before {
    margin-right: 0.5em;
  }

  input[type="submit"].fit,
  input[type="reset"].fit,
  input[type="button"].fit,
  .button.fit {
    min-width: 0;
    width: 100%;
  }

  input[type="submit"].small,
  input[type="reset"].small,
  input[type="button"].small,
  .button.small {
    font-size: 0.8em;
  }

  input[type="submit"].large,
  input[type="reset"].large,
  input[type="button"].large,
  .button.large {
    font-size: 1.35em;
  }

  input[type="submit"].primary,
  input[type="reset"].primary,
  input[type="button"].primary,
  .button.primary {
    background-color: #49bf9d;
    border-color: #49bf9d;
    color: #ffffff !important;
  }

  input[type="submit"].primary:hover,
  input[type="reset"].primary:hover,
  input[type="button"].primary:hover,
  .button.primary:hover {
    background-color: #5cc6a7;
    border-color: #5cc6a7;
  }

  input[type="submit"].primary:active,
  input[type="reset"].primary:active,
  input[type="button"].primary:active,
  .button.primary:active {
    background-color: #3eb08f;
    border-color: #3eb08f;
  }

  input[type="submit"].disabled,
  input[type="submit"]:disabled,
  input[type="reset"].disabled,
  input[type="reset"]:disabled,
  input[type="button"].disabled,
  input[type="button"]:disabled,
  .button.disabled,
  .button:disabled {
    background-color: #e7e7e7 !important;
    border-color: #e7e7e7 !important;
    color: #b2b2b2 !important;
    cursor: default;
  }

  /* eof Button */
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fontSizes}
  ${global}
`;
