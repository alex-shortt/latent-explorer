import React from "react"
import styled from "styled-components/macro"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

// eslint-disable-next-line import/no-cycle
import Item from "./components/Item"
import Controls from "./components/Controls"

export const SIZE = 10000

const POINT_COLOR = "#080818"
const BACKGROUND_COLOR = "#ffffff"

const Container = styled.div`
  position: relative;
  width: ${SIZE}px;
  height: ${SIZE}px;
  border: inset 2px ${POINT_COLOR};
  transform: translate(-50%, -50%);
  cursor: grab;
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

  &:active {
    cursor: grabbing;
  }
`

const Image = styled.img.attrs({
  src:
    "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
})`
  width: 400px;
  cursor: pointer;
`

export default function Plane(props) {
  return (
    <TransformWrapper
      options={{
        limitToBounds: false,
        centerContent: false,
        minScale: 0.5
      }}
      defaultPositionX={0}
      defaultPositionY={0}
      wheel={{ step: SIZE / 120 }}
    >
      {transformProps => (
        <>
          <TransformComponent>
            <Container>
              <Item>
                <Image />
              </Item>
            </Container>
          </TransformComponent>
          <Controls transformProps={transformProps} />
        </>
      )}
    </TransformWrapper>
  )
}
