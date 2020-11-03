import React from "react"
import { Helmet } from "react-helmet"

const CreateHead = props => {
  const headInfo = {
    title: props.title ? props.title : "Faz MOSSA",
    description: props.description
      ? props.description
      : "Faz Mossa. Faz acontecer. Porque acreditamos que quando fazemos Mossa surpreendemos as pessoas. Queremos que sintam as experiências e que partilhem memórias inesquecíveis. Marcas inesquecíveis. A sua marca.",
    url: props.url ? props.url : "https://mossa.pt",
    image: props.img ? props.img : "/images/holy-mossa.png",
  }

  return (
    <Helmet>
      <title>{headInfo.title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
      <meta name="description" content={headInfo.description} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:url" content={headInfo.url} />
      <meta property="og:title" content={headInfo.title} />
      <meta property="og:description" content={headInfo.description} />
      <link rel="image_src" href={headInfo.image}></link>
      <meta property="og:image" content={headInfo.image} />

      <meta property="og:site_name" content={headInfo.title} />

      <meta name="twitter:title" content={headInfo.title} />
      <meta name="twitter:description" content={headInfo.description} />
      <meta name="twitter:image" content={headInfo.image} />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:image:alt" content={headInfo.title}></meta>

      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {props.children}
    </Helmet>
  )
}
export default CreateHead
