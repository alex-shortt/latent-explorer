import React from "react"
import styled from "styled-components/macro"
import { Collapse, Row } from "antd"
import {
  PlusSquareTwoTone,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined
} from "@ant-design/icons"

const Spacer = styled.div`
  height: 100%;
  width: 15px;
`

const vectorSettings = () => {
  const style = { fontSize: "1.2rem", marginTop: "3px" }

  const exportVector = e => {
    e.stopPropagation()
    alert("asfsad")
  }

  const importVector = e => {
    e.stopPropagation()
    alert("asdf")
  }

  const addPoint = e => {
    e.stopPropagation()
    alert("hello")
  }

  return (
    <Row>
      <VerticalAlignTopOutlined style={style} onClick={exportVector} />
      <Spacer />
      <VerticalAlignBottomOutlined style={style} onClick={importVector} />
      <Spacer />
      <PlusSquareTwoTone
        twoToneColor="#0DAEEB"
        style={style}
        onClick={addPoint}
      />
    </Row>
  )
}

export default function VectorPanel(props) {
  return <></>
}
