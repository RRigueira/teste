import React from "react"
import { Global } from "@emotion/core"
import { globalStyles } from "~theme/global"
import CreateHead from "../components/createHead/CreateHead"

const Layout = ({ location, ...props }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <CreateHead></CreateHead>
      {props.children}
    </>
  )
}

export default Layout
