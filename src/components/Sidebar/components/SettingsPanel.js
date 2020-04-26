import React, { useContext } from "react"
import { Form, Input, InputNumber } from "antd"

import { SettingsContext } from "services/settings"

export default function SettingsPanel(props) {
  const {
    connectionUrl,
    setConnectionUrl,
    dimensions,
    setDimensions,
    MAX_DIMENSIONS,
    truncation,
    setTruncation,
    defaultValue,
    setDefaultValue
  } = useContext(SettingsContext)

  return (
    <>
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
      <Form.Item label="Default Value">
        <InputNumber
          value={defaultValue}
          onChange={val => setDefaultValue(val)}
          step={0.00001}
          min={-1}
          max={1}
        />
      </Form.Item>
    </>
  )
}
