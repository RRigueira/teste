import React from "react"
import Slider from "react-slick"

const Slideshow = ({ data }) => {
  const settings = {
    dots: data.showDots,
    arrows: data.sShowArrows,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {data.sSlides.map(slide => {
        let image = slide.image.localFile.childImageSharp.fluid
        return (
          <div key={image.src}>
            <img src={image.src} srcSet={image.srcSet} />
            <p>{slide.text}</p>
            <p>{slide.title}</p>
          </div>
        )
      })}
    </Slider>
  )
}

export default Slideshow
