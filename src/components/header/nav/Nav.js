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
  console.log(data[1])

  return (
    <Wrapper>
      <nav>
        <ul>
          {lang === "EN"
            ? data[0].node.menuItems.nodes.map(item => {
                return (
                  <li key={item.url}>
                    <Link to={item.url}>{item.label}</Link>
                  </li>
                )
              })
            : data[1].node.menuItems.nodes.map(item => {
                let ur = null
                item.url === "/pt/" ? (ur = "/") : (ur = item.url)
                return (
                  <li key={ur}>
                    <Link to={ur}>{item.label}</Link>
                  </li>
                )
              })}
        </ul>
      </nav>
    </Wrapper>
  )
}

export default Nav
