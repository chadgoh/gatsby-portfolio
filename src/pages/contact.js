import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import SEO from "../components/SEO"
const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact me via email" />
      <Contact />
    </Layout>
  )
}

export default contact
