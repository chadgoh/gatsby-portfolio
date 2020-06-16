import React, { useState } from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { FiLoader } from "react-icons/fi"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        employer
        position
        date
        description {
          id
          description
        }
      }
    }
  }
`

const JobsDivCenter = styled.div`
  width: 80vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;

  @media screen and (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  .active-job-btn {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }
`

const EmployerButton = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: 0.2rem;
  margin: 0 0.5rem;
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;
  transition: var(--transition);
  :hover {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
    transform: scale(1.02);
  }
`

const JobInfoArticle = styled.article`
  h3 {
    margin-top: 0;
    font-weight: 400;
    color: var(--clr-primary-1);
  }

  h4 {
    text-transform: uppercase;
    color: var(--clr-primary-1);
    background: var(--clr-primary-3);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
  }
`

const JobDescriptionDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;
  justify-content: center;

  p {
    margin: auto 0;
  }

  .job-icon {
    color: var(--clr-primary-5);
  }
`

const Experience = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query)

  const [value, setValue] = useState(0)
  const { employer, position, date, description } = jobs[value]

  const setActive = index => {
    setValue(index)
  }
  return (
    <section className="section">
      <Title title="Experience" />
      <JobsDivCenter>
        {/* button container */}
        <ButtonContainer>
          {jobs.map((job, index) => {
            return (
              <EmployerButton
                className={index === value ? "active-job-btn" : ""}
                key={job.strapiId}
                onClick={() => setActive(index)}
              >
                {job.employer}
              </EmployerButton>
            )
          })}
        </ButtonContainer>
        <JobInfoArticle>
          <h3>{position}</h3>
          <h4>{employer}</h4>
          <p style={{ letterSpacing: "0.2rem", color: "#4f5d75" }}> {date}</p>
          {description.map(descItem => {
            return (
              <JobDescriptionDiv key={descItem.id}>
                <FiLoader className="job-icon" />
                <p> {descItem.description}</p>
              </JobDescriptionDiv>
            )
          })}
        </JobInfoArticle>
      </JobsDivCenter>
    </section>
  )
}

export default Experience
