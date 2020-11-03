import React from "react"
import Slider from "react-slick"
import { ButtonContainer } from "./Button.styles"

import GoogleMapReact from "google-map-react"
import { Link } from "gatsby"
const Button = ({ data }) => {
  return (
    <ButtonContainer>
      <Link to={data.bButton.url} target={data.bButton.target}>
        {data.bButton.title}
      </Link>
    </ButtonContainer>
  )
}

export default Button
