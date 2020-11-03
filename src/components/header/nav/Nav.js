import React, { useEffect } from "react"
import { useState } from "react"
import {
  Wrapper,
  Container,
  List,
  Item,
  Duplicate,
  Info,
  Content,
  Description,
  ContactContainer,
} from "./Nav.styles"
import { Link, graphql } from "gatsby"

const Nav = ({ data, lang }) => {
  return (
    <Wrapper>
      <nav>
        <ul>
          {lang === "EN"
            ? data[1].node.menuItems.nodes.map(item => {
                let uri = item.connectedNode.node.uri
                return (
                  <li key={uri}>
                    <Link to={uri}>{item.label}</Link>
                  </li>
                )
              })
            : data[0].node.menuItems.nodes.map(item => {
                let uri = item.connectedNode.node.uri
                return (
                  <li key={uri}>
                    <Link to={uri}>{item.label}</Link>
                  </li>
                )
              })}
        </ul>
      </nav>
    </Wrapper>
  )
}

export default Nav
