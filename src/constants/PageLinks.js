import React from "react"
import { Link } from "gatsby"

const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "contact",
    url: "/contact",
  },
  {
    id: 4,
    text: "projects",
    url: "/projects",
  },
]

export default links.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
