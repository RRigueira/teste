import React, { useState } from "react"
import Slider from "react-slick"
import { CardsContainer, SingleCard, CardPopup } from "./Cards.styles"

const Cards = ({ data }) => {
  let width = 100 / data.cColumnsNumber + "%"

  const [popup, setPopup] = useState({ show: false, content: null })

  return (
    <CardsContainer>
      {data.cCards.map((card, index) => {
        let image = card.cImage.localFile.childImageSharp.fixed
        return (
          <SingleCard width={width} key={index}>
            <img src={image.src} />
            <h2>{card.cTitle}</h2>
            <h3>{card.cSubtitle}</h3>
            <span dangerouslySetInnerHTML={{ __html: card.cText }}></span>
            <button
              onClick={() => setPopup({ show: true, content: card.cPopupInfo })}
            >
              show more
            </button>
          </SingleCard>
        )
      })}
      <CardPopup
        show={popup.show}
        bgColor={popup.content ? popup.content.backgroundColor : null}
        textColor={popup.content ? popup.content.textColor : null}
      >
        <button onClick={() => setPopup({ show: false, content: null })}>
          close
        </button>
        <div>
          {popup.content && <p>{popup.content.title}</p>}
          <span
            dangerouslySetInnerHTML={{
              __html: popup.content ? popup.content.text : null,
            }}
          ></span>
        </div>
      </CardPopup>
    </CardsContainer>
  )
}

export default Cards
