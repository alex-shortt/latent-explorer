import React, { useState } from "react"
import styled from "styled-components/macro"
import { Form, Input, InputNumber, Slider, Row, Col, Collapse } from "antd"

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  overflow-y: auto;
`

const Header = styled.h1`
  text-align: center;
`

const MAX_DIMENSIONS = 512

function DimensionSliderBase(props) {
  const { index } = props
  const [value, setValue] = useState(0)

  return (
    <Form.Item label={`dim_${index}`} key={`dim-${index}`}>
      <Row>
        <Col span={16}>
          <Slider
            value={typeof value === "number" ? value : 0}
            min={-1}
            max={1}
            onChange={newVal => setValue(newVal)}
            step={0.00001}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            value={value}
            onChange={newVal => setValue(newVal)}
            step={0.00001}
            min={-1}
            max={1}
          />
        </Col>
      </Row>
    </Form.Item>
  )
}

const DimensionSlider = React.memo(DimensionSliderBase)

export default function Sidebar(props) {
  const [connectionUrl, setConnectionUrl] = useState("https://localhost:8000")
  const [dimensions, setDimensions] = useState(512)
  const [truncation, setTruncation] = useState(0.8)
  const [changedVectors, setChangedVectors] = useState([])

  return (
    <Container>
      <Header>Latent Explorer</Header>
      <br />
      <Collapse defaultActiveKey={["1"]}>
        <Collapse.Panel header="Settings" key="1">
          <Form.Item label="Connection Url">
            <Input
              value={connectionUrl}
              onChange={e => setConnectionUrl(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Dimensions">
            <InputNumber
              value={dimensions}
              onChange={val => setDimensions(val)}
              min={0}
              max={MAX_DIMENSIONS}
            />
          </Form.Item>
          <Form.Item label="Truncation">
            <InputNumber
              value={truncation}
              onChange={val => setTruncation(val)}
              step={0.01}
              min={0}
              max={1}
            />
          </Form.Item>
        </Collapse.Panel>
        <br />
        <Collapse.Panel header="Vector" key="2">
          {changedVectors.map((vec, i) => {
            return <DimensionSlider index={i} value={vec} />
          })}
        </Collapse.Panel>
      </Collapse>
    </Container>
  )
}
