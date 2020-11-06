import React from "react"
import { Global } from "@emotion/core"
import { ChildrenWrapper } from "./Layout.styles"

const Layout = ({ location, ...props }) => {
  return (
    <>
      <Global styles={ChildrenWrapper}></Global>
      {props.children}
    </>
  )
}

export default Layout
