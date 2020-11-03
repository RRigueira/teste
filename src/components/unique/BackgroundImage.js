import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const ImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    opacity: 0.6;
    background: ${props => (props.color ? props.color : "transparent")};
  }
`

const BackgroundImage = ({ img, color }) => {
  console.log(img.localFile.childImageSharp.fluid)
  return (
    <ImageContainer color={color}>
      <img src={img.localFile.childImageSharp.fluid.srcWebp} srcSet={img.localFile.childImageSharp.fluid.srcSetWebp}></img>
    </ImageContainer>
  )
}

export default BackgroundImage

