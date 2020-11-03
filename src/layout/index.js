import React from "react"
import { Global } from "@emotion/core"
import { globalStyles } from "~theme/global"

const Layout = ({ location, ...props }) => {
  return (
    <>
      <Global styles={globalStyles} />
      {props.children}
    </>
  )
}

export default Layout
