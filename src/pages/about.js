import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import Title from "../components/Title"
import SEO from "../components/SEO"
import { useStaticQuery, graphql, Link } from "gatsby"

export const queryImage = graphql`
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

const AboutSection = styled.section`
  padding: 7rem 0;
  background: #dfdfdf;

  .about-img {
    margin-bottom: 2rem;
    height: 25rem;
  }

  .about-text {
    h2 {
      text-align: left;
    }
    .section-title {
      margin-bottom: 2rem;
      text-align: left;
    }

    .underline {
      margin-left: 0;
      margin-right: 0;
    }

    p {
      line-break: 2;
    }

    span {
      display: inline-block;
      background: var(--clr-primary-6);
      color: var(--clr-primary-2);
      margin-right: 0.5rem;
      margin-top: 0.5rem;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.85rem;
    }
  }

  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      column-gap: 4rem;
    }
    .about-img {
      grid-column: 1 / span 5;
      margin-bottom: 0;
    }
    .about-text {
      grid-column: 6 / -1;
    }
  }
`

const About = () => {
  const tags = [
    {
      id: 1,
      tech: "HTML5",
    },
    {
      id: 2,
      tech: "CSS3",
    },
    {
      id: 3,
      tech: "JavaScript",
    },
    {
      id: 4,
      tech: "REACT.JS",
    },
    {
      id: 5,
      tech: "GATSBY.JS",
    },
    {
      id: 6,
      tech: "NODE.JS",
    },
    {
      id: 7,
      tech: "SQL",
    },
    // {
    //   id: 8,
    //   tech: "SQL",
    // },
  ]

  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(queryImage)

  return (
    <Layout>
      <SEO title="About" description="About me" />
      <AboutSection className="section ">
        <section className="about-center section-center">
          {/* <Image fluid={fluid} className="about-img" /> */}
          <article className="about-text">
            <Title title="About Me" className="section-title" />
            <p>
              Hello! I'm Chad and I am just starting out on my career as a
              software developer.
            </p>
            <p>
              I enjoy coding and learning new technologies. Most of my
              experience thus far has been with ReactJS and .NET Core.
            </p>
            <p>
              Currently, I am exploring the JAMStack with GatsbyJS and what it
              has to offer. I will be starting my first full-time software
              development job in August this year and am really looking forward
              to that.
            </p>

            <p>
              Feel free to contact me at my{" "}
              <Link to="/contact">contact page</Link> for any enquiries!
            </p>
            {tags.map(tag => (
              <span key={tag.id}>{tag.tech}</span>
            ))}
          </article>
        </section>
      </AboutSection>
    </Layout>
  )
}

export default About
