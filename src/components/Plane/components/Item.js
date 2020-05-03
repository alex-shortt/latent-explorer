import React from "react"
import styled from "styled-components/macro"

import { PLANE_SIZE } from "../constants"

const Container = styled.div.attrs(props => ({
  style: {
    transform: `translate(${props.x}px, ${props.y}px) translate(-50%, -50%)`
  }
}))`
  position: absolute;
  z-index: 1;
`

const TitleBar = styled.div`
  padding: 4px 10px;
  width: 100%;
  background: black;
  color: white;
  cursor: pointer;
  font-size: 1rem;
`

export default function Item(props) {
  const CENTER_X = PLANE_SIZE / 2 + window.innerWidth / 2
  const CENTER_Y = PLANE_SIZE / 2 + window.innerHeight / 2

  const { x = CENTER_X, y = CENTER_Y, title, children } = props

  return (
    <Container x={x} y={y}>
      <TitleBar>{title}</TitleBar>
      {children}
    </Container>
  )
}
