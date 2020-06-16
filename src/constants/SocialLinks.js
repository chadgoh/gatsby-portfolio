import React from "react"
import { FaFileAlt, FaLinkedin, FaGithub } from "react-icons/fa"
import styled from "styled-components"

const Anchor = styled.a`
  font-size: 1.75rem;
  color: var(--clr-primary-2);
  transition: var(--transition);

  :hover {
    color: var(--clr-primary-5);
  }
`

const SocialList = styled.ul`
  transition: var(--transition);
  margin-top: 2rem;
  width: fit-content;
  display: flex;
  justify-content: start;
  padding-left: 0;

  li + li {
    padding-left: 1rem;
  }
  :hover {
    transform: scale(1.02);
  }
`

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/chadgoh/",
  },
  // {
  //   id: 2,
  //   icon: <FaFileAlt className="social-icon"></FaFileAlt>,
  //   url: "../assets/cv Goh Jie Long Chad (2020).pdf",
  // },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/chadgoh",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <Anchor href={link.url} target="_blank" rel="noreferrer">
        {" "}
        {link.icon}
      </Anchor>
    </li>
  )
})

const SocialLinks = ({ styleClass }) => {
  return (
    <SocialList className={`${styleClass ? styleClass : ""}`}>
      {links}
    </SocialList>
  )
}

export default SocialLinks
