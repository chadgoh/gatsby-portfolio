import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteUrl
        siteDescription: description
        author
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)

  const { siteTitle, siteUrl, siteDescription, author } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
    </Helmet>
  )
}

export default SEO
