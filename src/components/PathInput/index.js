import React, { useContext, useState, useCallback } from "react"
import styled from "styled-components/macro"
import {
  Input,
  Modal,
  Select as SelectBase,
  InputNumber as InputNumberBase
} from "antd"

import Path from "definitions/Path"
import { WorkspaceContext } from "services/workspace"
import { SettingsContext } from "services/settings"

const { Option } = SelectBase

const Select = styled(SelectBase)`
  width: 150px;
  margin: 0 10px !important;
`

const StepInput = styled(InputNumberBase)`
  width: 300px;
  margin: 0 10px !important;
`

export default function PathInput(props) {
  const { vectors, addPath } = useContext(WorkspaceContext)
  const { dimensions } = useContext(SettingsContext)

  const { open, setOpen } = props

  const [modalInput, setModalInput] = useState("")
  const [startVectorId, setStartVectorId] = useState("")
  const [endVectorId, setEndVectorId] = useState("")
  const [steps, setSteps] = useState(5)

  const onChangeStart = val => setStartVectorId(val)
  const onChangeEnd = val => setEndVectorId(val)

  const buildPath = useCallback(() => {
    const startVector = vectors.find(vec => vec.getId() === startVectorId)
    const endVector = vectors.find(vec => vec.getId() === endVectorId)
    const path = new Path(dimensions, startVector, endVector, { steps })
    addPath(path)
  }, [addPath, dimensions, endVectorId, startVectorId, steps, vectors])

  if (vectors.length < 2) {
    return (
      <Modal
        title="Create a New Path"
        visible={open}
        onOk={() => setOpen(false)}
      >
        You need at least two vectors to create a path
      </Modal>
    )
  }

  return (
    <Modal
      title="Create a New Path"
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={buildPath}
    >
      Interpolate From
      <Select onChange={onChangeStart}>
        {vectors.map(vector => (
          <Option key={vector.getId()} value={vector.getId()}>
            {vector.getName()}
          </Option>
        ))}
      </Select>
      To
      <Select onChange={onChangeEnd}>
        {vectors.map(vector => (
          <Option key={vector.getId()} value={vector.getId()}>
            {vector.getName()}
          </Option>
        ))}
      </Select>
      In
      <StepInput
        value={steps}
        onChange={val => setSteps(val)}
        min={3}
        max={20}
      />
      Steps
    </Modal>
  )
}
