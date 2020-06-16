import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import styled from "styled-components"

const ProjectInfoDiv = styled.div`
  background: #f8f9fa;
  padding: 1rem 2rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); */
  h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`

const ProjectDescriptionParagraph = styled.p`
  color: var(--clr-primary-2);
`

const ProjectArticle = styled.article`
  display: grid;
  margin-bottom: 4rem;
  transition: all 0.3s linear;
  .project-img {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    height: 19rem;
    z-index: 0;

    /* ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
      opacity: 0.35;
    } */
  }

  .project-icon {
    color: var(--clr-primary-2);
    font-size: 1.4rem;
    margin-right: 0.5rem;

    :hover {
      color: var(--clr-primary-5);
    }
  }

  :hover {
    transform: scale(1.02);
  }

  @media screen and (min-width: 576px) {
    .project-img {
      height: 19rem;
    }
  }

  @media screen and (min-width: 768px) {
    .project-img {
      height: 22rem;
    }
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    /* cursor: pointer; */
    .project-img {
      grid-column: 1 / span 8;
      grid-row: 1 / 1;
      height: 30rem;
      border-radius: 0.25rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    ${ProjectInfoDiv} {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border-radius: 0.25rem;
      z-index: 1;
      grid-column: 5/12;
      grid-row: 1/1;
      /* 
      :hover {
        opacity: 40%;
        transition-delay: 0.5s;
      } */
    }

    :nth-of-type(even) ${ProjectInfoDiv} {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }

    :nth-of-type(even) .project-img {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
  }
`

const ProjectNumberSpan = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  color: var(--clr-primary-5);
  margin-bottom: 0.75rem;
`

const TechTags = styled.div`
  margin-bottom: 1rem;

  span {
    display: inline-block;
    background: var(--clr-primary-6);
    color: var(--clr-primary-2);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
`

const Project = ({ description, title, github, url, tag, image, index }) => {
  return (
    <ProjectArticle>
      {Image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <ProjectInfoDiv>
        <ProjectNumberSpan>0{index + 1}</ProjectNumberSpan>
        <h3>{title}</h3>
        <ProjectDescriptionParagraph>{description}</ProjectDescriptionParagraph>
        <TechTags>
          {tag.map(item => (
            <span key={item.id}>{item.description} </span>
          ))}
        </TechTags>
        <div>
          {github && (
            <a href={github} target="__blank" rel="noreferrer">
              <FaGithubSquare className="project-icon" />
            </a>
          )}

          {url && (
            <a href={url} target="__blank" rel="noreferrer">
              <FaShareSquare className="project-icon" />
            </a>
          )}
        </div>
      </ProjectInfoDiv>
    </ProjectArticle>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  tag: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
