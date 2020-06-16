import React from "react"
import styled from "styled-components"
import PageLinks from "../constants/PageLinks"
import { FaAlignRight, FaHome } from "react-icons/fa"
import { Link } from "gatsby"

const NavMain = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: #ffffff;

  @media screen and (min-width: 992px) {
    background: transparent;
  }
`

const NavCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLinks = styled.ul`
  display: none;
  transition: var(--transition);

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;

    li {
      list-style-type: none;
      margin-right: 2rem;
    }
    a {
      transition: var(--transition);
      text-transform: capitalize;
      color: var(--clr-primary-1);
      font-weight: bold;
      letter-spacing: 0.2rem;
      padding: 0.5rem 0;
      font-size: 1.25rem;
      :hover {
        color: var(--clr-primary-5);
        box-shadow: 0px 2px var(--clr-primary-5);
      }
    }
  }
`

const NavButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-2);
  cursor: pointer;

  :hover {
    color: var(--clr-primary-5);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Navbar = ({ toggleSidebar }) => {
  return (
    <NavMain>
      <NavCenter>
        <NavHeader>
          <Link to="/">
            <NavButton type="button">
              <FaHome />
            </NavButton>
          </Link>
          <NavButton type="button" onClick={() => toggleSidebar()}>
            <FaAlignRight />
          </NavButton>
        </NavHeader>
        <NavLinks>{PageLinks}</NavLinks>
      </NavCenter>
    </NavMain>
  )
}

export default Navbar
