import styled from "@emotion/styled"
import { toRem, breakpoints } from "~utils/mixins"
import { blue } from "../../theme/colors"

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`

export const SingleCard = styled.div`
  width: ${props => (props.width ? props.width : "25%")};
  padding: 20px;
`

export const CardPopup = styled.div`
  width: 50vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 400ms;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  background: ${props => (props.bgColor ? props.bgColor : "white")};
  p {
    color: ${props => (props.textColor ? props.textColor : "inherit")};
  }
`
