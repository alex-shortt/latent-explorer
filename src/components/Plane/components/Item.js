import React from "react"
import styled from "styled-components/macro"
import Draggable from "react-draggable"

import { PLANE_SIZE } from "../constants"

const Container = styled.div`
  z-index: 1;
  width: 500px;
`

const TitleBar = styled.div.attrs({ className: "handle" })`
  padding: 5px 15px;
  width: 100%;
  background: black;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
`

export default function Item(props) {
  const CENTER_X = PLANE_SIZE / 2 + window.innerWidth / 2
  const CENTER_Y = PLANE_SIZE / 2 + window.innerHeight / 2

  const {
    x = CENTER_X,
    y = CENTER_Y,
    title,
    transformProps,
    width = "500px",
    children
  } = props
  const { scale } = transformProps

  const onStart = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <Draggable
      handle=".handle"
      defaultPosition={{ x, y }}
      scale={scale}
      onStart={onStart}
      onDrag={onStart}
    >
      <Container style={{ width }}>
        <TitleBar>{title}</TitleBar>
        {children}
      </Container>
    </Draggable>
  )
}
