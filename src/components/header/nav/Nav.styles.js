import styled from "@emotion/styled"
import { h4 } from "~theme/typography"
import { toRem } from "~utils/mixins"

export const Wrapper = styled.div`
  width: 100%;
  background: red;
  nav {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        ${h4}
        color: white;
        text-align: center;
        text-transform: uppercase;
        margin: ${toRem(12)};
        transition: 250ms;
        &.active,
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`
