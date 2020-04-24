import React from "react"
import styled from "styled-components/macro"
import {
  HomeFilled,
  PlusSquareFilled,
  MinusSquareFilled
} from "@ant-design/icons"
import { Button } from "antd"

const Container = styled.div`
  position: absolute !important;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
`

export default function Controls(props) {
  const {
    transformProps: { resetTransform, zoomIn, zoomOut }
  } = props

  return (
    <Container>
      <Button onClick={e => zoomIn(e)}>
        <PlusSquareFilled />
      </Button>
      <br />
      <Button onClick={e => zoomOut(e)}>
        <MinusSquareFilled />
      </Button>
      <br />
      <Button onClick={() => resetTransform()}>
        <HomeFilled />
      </Button>
    </Container>
  )
}
