import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import { HeroContainer } from "./Hero.styles"
import ReactPlayer from "react-player"
import Collapse from "../../../node_modules/rc-collapse"

const Hero = ({ data }) => {
  return (
    <HeroContainer>
      <div className="background">
        {data.hMediaType === "Video" ? (
          <ReactPlayer
            url={data.hVideo.hVideoUrl.mediaItemUrl}
            width="100%"
            height="100%"
            loop
            playing={true}
            muted={true}
          />
        ) : (
          <img />
        )}
      </div>
      <h2>{data.hTitle}</h2>
      <h3>{data.hSubtitle}</h3>
      <span dangerouslySetInnerHTML={{__html: data.hText}}></span>
    </HeroContainer>
  )
}

export default Hero
