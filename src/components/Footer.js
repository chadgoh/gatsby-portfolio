import React from "react"
import SocialLinks from "../constants/SocialLinks"
import styled from "styled-components"

const StyledFooter = styled.footer`
  height: 9rem;
  background: var(--clr-primary-1);
  text-align: center;
  display: grid;
  place-items: center;

  a {
    color: #fff;
  }

  h4 {
    margin-top: 0.5rem;
    color: #fff;
    font-weight: normal;
    text-transform: uppercase;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <SocialLinks styleClass="footer-icon" />
      <h4>copyright &copy; {new Date().getFullYear()} | All rights reserved</h4>
    </StyledFooter>
  )
}

export default Footer
