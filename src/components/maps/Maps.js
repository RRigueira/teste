import React from "react"
import Slider from "react-slick"
import { MapsContainer } from "./Maps.styles"

import GoogleMapReact from "google-map-react"
const Maps = ({ data }) => {
  return (
    <MapsContainer>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCnYqH87jqT63C1XCk6_QA4zx1gdiylaWY",
        }}
        defaultCenter={{
          lat: data.mLatitude,
          lng: data.mLongitude,
        }}
        defaultZoom={16}
      ></GoogleMapReact>
    </MapsContainer>
  )
}

export default Maps
