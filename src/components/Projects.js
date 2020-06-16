import React from "react"

import styled from "styled-components"
import Title from "./Title"
import { Link } from "gatsby"
import Project from "./Project"

const ProjectsSection = styled.section`
  background: #dfdfdf;
  padding-bottom: 3rem;
`

const Projects = ({ projects, title, showLink }) => {
  return (
    <ProjectsSection className="section">
      <Title title={title} />
      <div className="section-center">
        {projects.map((project, index) => {
          return <Project key={index} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link
          to="/projects"
          className="btn center-btn"
          style={{ color: "#f8f9fa" }}
        >
          See All Projects
        </Link>
      )}
    </ProjectsSection>
  )
}

export default Projects
