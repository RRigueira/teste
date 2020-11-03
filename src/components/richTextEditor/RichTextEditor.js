import React from "react"
import Slider from "react-slick"
import { RichTextEditorContainer } from "./RichTextEditor.styles"

const RichTextEditor = ({ data }) => {
  let image = data.tBackgroundImage
    ? data.tBackgroundImage.localFile.childImageSharp.fluid
    : null

  return (
    <RichTextEditorContainer
      color={data.tBackgroundColor ? data.tBackgroundColor : false}
      textcolor={data.tTextColor ? data.tTextColor : false}
    >
      {image ? (
        <div className="bg">
          <img src={image.src} srcSet={image.srcSet} />
        </div>
      ) : null}
      <h1>{data.tTtitle}</h1>
      <h2>{data.tSubtitle}</h2>
      <span dangerouslySetInnerHTML={{ __html: data.tText }}></span>
    </RichTextEditorContainer>
  )
}

export default RichTextEditor
