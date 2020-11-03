import React from "react"
import Slider from "react-slick"
import { VideoContainer } from "./Video.styles"
import ReactPlayer from "react-player"

const Video = ({ data }) => {
  let image = data.vImageFallback.localFile.childImageSharp.fluid
  return (
    <VideoContainer>
      <ReactPlayer
        controls={true}
        url={data.vUrl}
        width="100%"
        height="100%"
        light={image.src}
      />
    </VideoContainer>
  )
}

export default Video
