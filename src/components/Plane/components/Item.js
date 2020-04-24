import React from "react"
import styled from "styled-components/macro"

// eslint-disable-next-line import/no-cycle
import { SIZE } from ".."

const Container = styled.div.attrs(props => ({
  style: {
    transform: `translate(${props.x}px, ${props.y}px) translate(-50%, -50%)`
  }
}))`
  position: absolute;
  z-index: 1;
  cursor: pointer;
`

export default function Item(props) {
  const CENTER_X = SIZE / 2 + window.innerWidth / 2
  const CENTER_Y = SIZE / 2 + window.innerHeight / 2
  const { x = CENTER_X, y = CENTER_Y, children } = props

  return (
    <Container x={x} y={y}>
      {children}
    </Container>
  )
}
