import React from "react"
import Slider from "react-slick"
import { AccordionContainer } from "./Accordion.styles"
import ReactPlayer from "react-player"
import Collapse from "../../../node_modules/rc-collapse"

const Accordion = ({ data }) => {
  return (
    <AccordionContainer>
      <Collapse accordion={true}>
        <Collapse.Panel header="hello" headerClass="my-header-class">
          this is panel content
        </Collapse.Panel>
        <Collapse.Panel header="title2">
          this is panel content2 or other
        </Collapse.Panel>
      </Collapse>
    </AccordionContainer>
  )
}

export default Accordion
