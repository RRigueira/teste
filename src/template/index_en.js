import React from "react"
import BackgroundImage from "~components/unique/BackgroundImage"
import HeroText from "../components/unique/HeroText"
import Slideshow from "~components/slideshow"
import RichTextEditor from "../components/richTextEditor"
import Cards from "../components/cards/Cards"
import Video from "../components/videoBlock/Video"
import Accordion from "../components/accordion"
import Hero from "../components/hero"
import Form from "../components/form"
import Maps from "../components/maps"
import Newsletter from "../components/newsletter"
import Nav from "../components/header/nav/Nav"
import Lang from "../components/lang"

const Index = props => {
  let modules = props.pageContext.Modules.modules
  console.log(props)
  return (
    <main>
      <Lang data={props.pageContext}></Lang>
      <Nav
        data={props.data.allWpMenu.edges}
        lang={props.pageContext.language.code}
      ></Nav>

      <CreateHead
        title={props.pageContext.seo.seoTitle}
        description={props.pageContext.seo.seoDescription}
        image={
          props.pageContext.seo.seoImage
            ? props.pageContext.seo.seoImage.localFile.childImageSharp.fixed.src
            : null
        }
      ></CreateHead>
      {modules.map((module, index) => {
        switch (module.fieldGroupName) {
          case "page_Modules_Modules_Slideshow":
            return <Slideshow data={module} key={index}></Slideshow>
          case "page_Modules_Modules_TextBlock":
            return <RichTextEditor data={module} key={index}></RichTextEditor>
          case "page_Modules_Modules_Cards":
            return <Cards data={module} key={index}></Cards>
          case "page_Modules_Modules_Video":
            return <Video data={module} key={index}></Video>
          case "page_Modules_Modules_Accordion":
            return <Accordion data={module} key={index}></Accordion>
          case "page_Modules_Modules_Hero":
            return <Hero data={module} key={index}></Hero>
          case "page_Modules_Modules_ContactForm":
            return (
              <Form key={index} lang={props.pageContext.language.code}></Form>
            )
          case "page_Modules_Modules_Newsletter":
            return <Newsletter key={index}></Newsletter>
          case "page_Modules_Modules_GoogleMaps":
            return <Maps data={module} key={index}></Maps>
          case "page_Modules_Modules_Button":
            return <Button data={module} key={index}></Button>
        }
      })}
    </main>
  )
}

export const query = graphql`
  {
    allWpMenu {
      edges {
        node {
          slug
          menuItems {
            nodes {
              label
              connectedNode {
                node {
                  ... on WpPage {
                    uri
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Index
