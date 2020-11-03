import React from "react"
import styled from "@emotion/styled"
import { h1 } from "~theme/typography"
import { toRem } from "~utils/mixins"

const HeroTextContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${toRem(120)};
  h1 {
    ${h1}
    text-align: center;
    color: white;
    font-weight: 200;
    text-transform: uppercase;
    color: white;
  }
`

const HeroText = ({ text }) => {
  return (
    <HeroTextContainer>
      <h1 dangerouslySetInnerHTML={{ __html: text }}></h1>
    </HeroTextContainer>
  )
}

export default HeroText
