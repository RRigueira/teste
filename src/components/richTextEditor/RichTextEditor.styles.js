import styled from "@emotion/styled"
import { toRem, breakpoints } from "~utils/mixins"
import { blue } from "../../theme/colors"

export const RichTextEditorContainer = styled.div`
  background-color: ${props => (props.color ? props.color : "red")};
  min-height: 400px;
  .bg {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  span {
    p {
      margin: 0;
      color: ${props => (props.textcolor ? props.textcolor : "blue")};
    }
  }
`
