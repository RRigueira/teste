import styled from "@emotion/styled"
import { toRem, breakpoints } from "~utils/mixins"
import { blue } from "~theme/colors"

export const Wrapper = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  background: red;
  button {
    align-self: flex-end;
    margin-top: 15px;
  }
`

export const Title = styled.p`
  text-transform: uppercase;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  border: 2px solid white;
`

export const Field = styled.div`
  position: relative;
  width: 100%;
  input,
  textarea {
    color: white;
    appearance: none;
    background: transparent;
    outline: none;
    border-radius: 0;
    box-shadow: none;
    border: none;
    color: white;
    width: 100%;
    padding: 25px;
    &::placeholder {
      color: white;
    }
  }
  textarea {
    resize: none;
  }
  &:first-of-type {
    border-right: 2px solid white;
  }
  &:last-of-type {
    border-top: 2px solid white;
  }
  p {
    color: white;
    padding: 10px;
    margin: 0;
  }
  @media ${breakpoints.phablet} {
    width: ${props => (props.isFull ? "100%" : "50%")};
    padding: 0;
  }
`

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(26, 26, 26, 0.2);
  z-index: ${props => (props.isOpen ? "15" : "0")};
  opacity: ${props => (props.isOpen ? "1" : "0")};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transition: 500ms;
  div {
    position: relative;
    padding: 24px;
    min-width: 200px;
    max-width: 300px;
    background-color: white;
    color: black;
  }
`

export const Toggle = styled.button`
  z-index: 20;
  right: 5px;
  top: 5px;
  position: absolute;
`
