import styled from "styled-components";

export const StyledFooter = styled.div`
  display: block;

  #footer .icons {
    margin: 1em 0 0 0;
  }

  #footer .icons a {
    color: rgba(255, 255, 255, 0.4);
  }

  #footer .copyright {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.8em;
    list-style: none;
    margin: 1em 0 0 0;
    padding: 0;
  }

  #footer .copyright li {
    border-left: solid 1px rgba(255, 255, 255, 0.25);
    display: inline-block;
    line-height: 1em;
    margin-left: 0.75em;
    padding-left: 0.75em;
  }

  #footer .copyright li:first-child {
    border-left: 0;
    margin-left: 0;
    padding-left: 0;
  }

  #footer .copyright li a {
    color: inherit;
  }
`;
