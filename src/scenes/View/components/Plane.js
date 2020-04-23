import React from "react"
import styled from "styled-components/macro"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

const Piece = styled.div``

const SIZE = 10000

const POINT_COLOR = "#080818"
const BACKGROUND_COLOR = "#ffffff"

const Container = styled.div`
  position: relative;
  width: ${SIZE}px;
  height: ${SIZE}px;
  border: inset 2px ${POINT_COLOR};
  background: repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 2px,
      ${BACKGROUND_COLOR} 2px,
      ${BACKGROUND_COLOR} 20px
    ),
    repeating-linear-gradient(
      to right,
      ${POINT_COLOR},
      ${POINT_COLOR} 2px,
      ${BACKGROUND_COLOR} 2px,
      ${BACKGROUND_COLOR} 20px
    );
`

const Floating = styled.div.attrs(props => ({
  style: {
    transform: `translate(${props.x}px, ${props.y}px) translate(-50%, -50%)`
  }
}))`
  position: absolute;
`

const Image = styled.img.attrs({
  src:
    "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
})`
  width: 400px;
`

function Item(props) {
  const CENTER_X = SIZE / 2 + window.innerWidth / 2
  const CENTER_Y = SIZE / 2 + window.innerHeight / 2
  const { x = CENTER_X, y = CENTER_Y, children } = props

  return (
    <Floating x={x} y={y}>
      {children}
    </Floating>
  )
}

export default function Plane(props) {
  const CENTER_X = SIZE / 2
  const CENTER_Y = SIZE / 2

  return (
    <TransformWrapper
      options={{
        limitToBounds: false
      }}
      defaultPositionX={-CENTER_X}
      defaultPositionY={-CENTER_Y}
      wheel={{ step: SIZE / 100 }}
    >
      <TransformComponent>
        <Container>
          <Item>
            <Image />
          </Item>
        </Container>
      </TransformComponent>
    </TransformWrapper>
  )
}
