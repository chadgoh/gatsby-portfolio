import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
const projects = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  console.log(projects)
  return (
    <Layout>
      <SEO title="Projects" description="A list of all my projects" />
      <section>
        <Projects projects={projects} title="All Projects" />
      </section>
    </Layout>
  )
}

export default projects

export const query = graphql`
  {
    allStrapiProjects {
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
