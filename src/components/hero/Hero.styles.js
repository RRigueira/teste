import styled from "@emotion/styled"
import { toRem, breakpoints } from "~utils/mixins"
import { blue } from "../../theme/colors"

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .background {
    z-index: -1;
    width: 100vw;
    height: 100vh;
    position: absolute;
    video {
      object-fit: cover;
    }
  }
  h2 {
    color: white;
  }
`
