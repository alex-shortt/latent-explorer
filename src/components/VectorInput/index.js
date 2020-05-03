import React, { useContext, useState } from "react"
import styled from "styled-components/macro"
import { Button, Input, Modal } from "antd"

import Vector from "definitions/Vector"
import { WorkspaceContext } from "services/workspace"
import { SettingsContext } from "services/settings"

export default function VectorInput(props) {
  const { addVector } = useContext(WorkspaceContext)
  const { dimensions } = useContext(SettingsContext)

  const { open, setOpen } = props

  const [modalInput, setModalInput] = useState("")

  const createZeroVector = () => {
    const newVector = new Vector(dimensions, { zeroVector: true })
    console.log("Created new zero vector:")
    console.log(newVector)
    addVector(newVector)
    setOpen(false)
  }

  const createRandomVector = () => {
    const newVector = new Vector(dimensions, { randomVector: true })
    console.log("Created new random vector:")
    console.log(newVector)
    addVector(newVector)
    setOpen(false)
  }

  const createCustomVector = () => {
    const newVector = new Vector(dimensions, { vector: modalInput })
    console.log("Created new custom vector:")
    console.log(newVector)
    addVector(newVector)
    setOpen(false)
  }

  return (
    <Modal
      title="Create a New Vector"
      visible={open}
      onCancel={() => setOpen(false)}
      onClick={e => e.stopPropagation()}
    >
      <Button onClick={createZeroVector}>Create a Zero Vector</Button>
      <hr />
      <Button onClick={createRandomVector}>Create a Random Vector</Button>
      <hr />
      <Button onClick={createCustomVector}>Input Vector Below</Button>
      <br />
      <br />
      <Input value={modalInput} onChange={e => setModalInput(e.target.value)} />
    </Modal>
  )
}
