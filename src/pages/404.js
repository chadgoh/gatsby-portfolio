import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import styled from "styled-components"
const ErrorMain = styled.main`
  display: grid;
  place-items: center;
  background: var(--clr-primary-6);

  div {
    display: grid;
    place-items: center;
    margin-bottom: 5rem;
  }

  h1 {
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 5rem;
  }
`

const ErrorPage = () => {
  return (
    <Layout>
      <ErrorMain>
        <div>
          <h1>Route doesn't exist!!</h1>
          <Link to="/" className="btn">
            Back to home page.
          </Link>
        </div>
      </ErrorMain>
    </Layout>
  )
}

export default ErrorPage
