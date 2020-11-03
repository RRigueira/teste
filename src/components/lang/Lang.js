import React from "react"
import Slider from "react-slick"
import { LangContainer } from "./Lang.styles"
import { Link } from "gatsby"

const Lang = ({ data }) => {
  let lang = data.language.code
  console.log(data.uri)
  console.log(data.translations[0].uri)
  return (
    <LangContainer>
      <ul>
        <li className={lang === "EN" ? "active" : ""}>
          <Link to={lang === "EN" ? data.uri : data.translations[0].uri}>
            En
          </Link>
        </li>
        <li className={lang === "PT" ? "active" : ""}>
          <Link to={lang === "PT" ? data.uri : data.translations[0].uri}>
            Pt
          </Link>
        </li>
      </ul>
    </LangContainer>
  )
}

export default Lang
