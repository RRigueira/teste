import styled from "@emotion/styled"
import { toRem } from "~utils/mixins"

export const ChildrenWrapper = styled.div`
`

export const Scroll = styled.span`
  position: absolute;
  top: calc(100vh - 36px);
  font-size: ${toRem(18)};
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 400ms;
  opacity: ${props => (props.hide ? "0" : "1")};
  pointer-events: ${props => (props.hide ? "none" : "auto")};
`
