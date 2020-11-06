import React from "react"
import { Global } from "@emotion/core"
import { ChildrenWrapper } from "./Layout.styles"
import { AnimatePresence } from "framer-motion"

const Layout = ({ location, ...props }) => {
  return (
    <>
      <Global styles={ChildrenWrapper}></Global>

      <AnimatePresence initial={false} exitBeforeEnter>
        {props.children}
      </AnimatePresence>
    </>
  )
}

export default Layout
