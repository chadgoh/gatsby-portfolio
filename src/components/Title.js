import React from "react"
import styled from "styled-components"

const TitleDiv = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`

const Title = ({ title }) => {
  return (
    <TitleDiv>
      <h2>{title || "default text"}</h2>
      <div className="underline"></div>
    </TitleDiv>
  )
}

export default Title
