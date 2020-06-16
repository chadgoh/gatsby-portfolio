import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import PageLinks from "../constants/PageLinks"
import SocialLinks from "../constants/SocialLinks"

const SidebarDiv = styled.div`
  .sidebar {
    background: var(--clr-primary-2);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    place-items: center;
    opacity: 0;
    transition: all 0.3s linear;
    transform: translateX(-100%);
  }

  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }

  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: red;
    cursor: pointer;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      transform: translateX(-100%);
    }
  }

  .LinksContainer {
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: row;
    align-items: center;
    grid-template-columns: 1fr;
    place-items: center;

    ul {
      margin: auto auto;
    }
    a {
      color: white;
    }
    a:hover {
      color: var(--clr-primary-5);
    }
  }

  .PageLinkList {
    padding: 2px 2px;
    letter-spacing: 0.2rem;
    padding: 0.5rem 0;
    font-size: 1.25rem;

    li {
      opacity: 1;
    }

    li a {
      display: block;
      text-align: center;
      text-transform: capitalize;
      color: #fff;
      letter-spacing: 0.2rem;
      margin-bottom: 0.5rem;
      font-size: 2rem;
      transition: var(--transition);
      border-radius: 0.25rem;
    }
  }
`

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarDiv>
      <aside className={`sidebar ${isOpen && "show-sidebar"}`}>
        <button
          className="close-btn"
          onClick={() => {
            toggleSidebar()
          }}
        >
          <FaTimes />
        </button>
        <div className="LinksContainer">
          <ul className="PageLinkList">{PageLinks}</ul>
          <SocialLinks />
        </div>
      </aside>
    </SidebarDiv>
  )
}

export default Sidebar
