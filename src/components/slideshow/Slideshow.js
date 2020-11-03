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
      {data.sSlides
        ? data.sSlides.map((slide, index) => {
            let image = slide.image
              ? slide.image.localFile.childImageSharp.fluid
              : null
            return (
              <div key={index}>
                {slide.image ? (
                  <img src={image.src} srcSet={image.srcSet} />
                ) : null}
                <p>{slide.text}</p>
                <p>{slide.title}</p>
              </div>
            )
          })
        : null}
    </Slider>
  )
}

export default Slideshow
