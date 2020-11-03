import styled from "@emotion/styled"
import { toRem, breakpoints } from "~utils/mixins"
import { blue } from "../../theme/colors"

export const LangContainer = styled.div`
  background-color: "white";
  position: absolute;
  top: 0;
  right: 0;
  ul {
    display: flex;
    li {
      padding: 5px;
      margin: 5px;
      background: blue;
    }
    .active {
      background: yellow;
    }
  }
`
