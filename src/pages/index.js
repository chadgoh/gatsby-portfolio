import React from "react"
import "../css/main.css"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function Home({ data }) {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="The Home Page" />
      <Hero />
      <Experience />
      <Projects projects={projects} title="Featured Projects" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { feature: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tag {
          description
          id
        }
      }
    }
  }
`
