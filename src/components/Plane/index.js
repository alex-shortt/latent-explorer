import React, { useContext } from "react"
import styled from "styled-components/macro"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

import { WorkspaceContext } from "services/workspace"

import { PLANE_SIZE } from "./constants"
import VectorRender from "./components/VectorRender"
import PathRender from "./components/PathRender"
import Controls from "./components/Controls"
import Item from "./components/Item"

const POINT_COLOR = "#080818"
const BACKGROUND_COLOR = "#ffffff"

const Container = styled.div`
  position: relative;
  width: ${PLANE_SIZE}px;
  height: ${PLANE_SIZE}px;
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
export default function Plane(props) {
  const { vectors, paths } = useContext(WorkspaceContext)

  console.log("vectors")
  console.log(vectors)
  console.log("paths")
  console.log(paths)

  return (
    <TransformWrapper
      options={{
        limitToBounds: false,
        centerContent: false,
        minScale: 0.1
      }}
      defaultPositionX={0}
      defaultPositionY={0}
      wheel={{ step: PLANE_SIZE / 120 }}
    >
      {transformProps => (
        <>
          <TransformComponent>
            <Container>
              {vectors.map(vector => (
                <Item
                  key={vector.getId()}
                  title={vector.getName()}
                  transformProps={transformProps}
                >
                  <VectorRender vector={vector} />
                </Item>
              ))}
              {paths.map(path => (
                <Item
                  key={path.getId()}
                  title={path.getName()}
                  transformProps={transformProps}
                  width={520 * path.getVectors().length - 20}
                >
                  <PathRender path={path} />
                </Item>
              ))}
            </Container>
          </TransformComponent>
          <Controls transformProps={transformProps} />
        </>
      )}
    </TransformWrapper>
  )
}
