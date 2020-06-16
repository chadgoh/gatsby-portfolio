import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import SocialLinks from "../constants/SocialLinks"

const queryImage = graphql`
  {
    file(relativePath: { eq: "hero-pic.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Header = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: var(--clr-primary-6);
  position: relative;

  .underline {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  @media screen and (min-width: 992px) {
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: #dfdfdf;
    }
    h4 {
      font-size: 0.85rem;
    }
  }

  @media screen and (min-width: 1170px) {
    h4 {
      font-size: 1rem;
      line-height: 1;
    }
  }
`

const DivCenter = styled.div`
  height: 100%;
  display: grid;
  align-items: center;

  .hero-img {
    display: none;
    max-height: 80vh;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    .hero-img {
      display: block;
      grid-row: 1/1;
      grid-column: 6/-1;
    }
  }
`

const InfoArticle = styled.article`
  background: var(--clr-primary-6);

  h4 {
    color: var(--clr-primary-2);
  }

  @media screen and (min-width: 992px) {
    grid-row: 1/1;
    grid-column: 1 / span 8;
  }

  @media screen and (min-width: 1170px) {
    grid-column: 1 / span 8;
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(queryImage)

  return (
    <Header>
      <DivCenter className="section-center">
        <InfoArticle>
          <div className="underline"> </div>
          <h1>I'm Chad</h1>
          <h4>Fullstack Web Developer</h4>
          <Link to="/contact" className="btn">
            Contact Me
          </Link>
          <SocialLinks />
        </InfoArticle>
        <Image fluid={fluid} className="hero-img" />
      </DivCenter>
    </Header>
  )
}

export default Hero
