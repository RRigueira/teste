import React from "react"
import styled from "@emotion/styled"
import { blue } from "../../theme/colors"
import { h1, h3 } from "../../theme/typography"
import { toRem } from "~utils/mixins"

export const CommonWrapper = styled.div`
  width: 100%;
  position: relative;
  height: ${props =>
    props.height === "auto" ? "auto" : "calc(100vh - 192px)"};
  display: flex;
  flex: 1;
  align-items: stretch;
`

export const CommonRow = styled.div`
  width: 50%;
  height: 100%;
  background: ${props => (props.color ? props.color : "white")};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${toRem(30)};
  position: relative;
  transition: 800ms;
  li {
    ${h3}
    color: white;
    text-align: center;
    text-transform: uppercase;
    margin: ${toRem(12)};
    opacity: 0.2;
    transition: 250ms;
    &.active,
    &:hover {
      opacity: 1;
    }
  }
  img {
    width: auto;
    object-fit: contain;
  }
  &.portfolio {
    min-height: 400px;
    background: ${blue.default};
    align-items: center;
    color: white;
    h2 {
      color: white;
    }
    p {
      color: white;
    }
    img {
      width: auto;
      height: auto;
      object-fit: contain;
    }
  }
  &.first {
    transform: ${props => (props.active ? "translateX(-50%)" : "unset")};
    position: relative;
    &::before {
      z-index: 15;
      content: "";
      width: 15px;
      height: 100%;
      position: absolute;
      transition: 400ms;
      opacity: ${props => (props.active ? "1" : "0")};
      right: 0;
      top: 0;
      -webkit-box-shadow: 10px 0px 10px 0px rgba(0, 0, 0, 0.23);
      -moz-box-shadow: 10px 0px 10px 0px rgba(0, 0, 0, 0.23);
      box-shadow: 10px 0px 10px 0px rgba(0, 0, 0, 0.23);
    }
  }
  &.second {
    transform: ${props => (props.active ? "translateX(50%)" : "unset")};
    position: relative;
    &::before {
      z-index: 15;
      content: "";
      width: 15px;
      height: 100%;
      position: absolute;
      transition: 400ms;
      opacity: ${props => (props.active ? "1" : "0")};
      left: 0;
      top: 0;
      position: red;
      -webkit-box-shadow: -10px 0px 10px 0px rgba(0, 0, 0, 0.23);
      -moz-box-shadow: -10px 0px 10px 0px rgba(0, 0, 0, 0.23);
      box-shadow: -10px 0px 10px 0px rgba(0, 0, 0, 0.23);
    }
  }
`
