import React, { useContext, useState } from "react"
import styled from "styled-components/macro"
import { Modal, Button, Input } from "antd"
import { PlusSquareTwoTone } from "@ant-design/icons"

import Vector from "definitions/Vector"
import { WorkspaceContext } from "services/workspace"
import { SettingsContext } from "services/settings"

export default function VectorsControls(props) {
  const { addVector } = useContext(WorkspaceContext)
  const { dimensions } = useContext(SettingsContext)

  const [showModal, setShowModal] = useState(false)
  const [modalInput, setModalInput] = useState("")

  const onClick = e => {
    e.stopPropagation()
    setShowModal(true)
  }

  const createZeroVector = () => {
    const newVector = new Vector(dimensions, { zeroVector: true })
    console.log("Created new zero vector:")
    console.log(newVector)
    addVector(newVector)
    setShowModal(false)
  }

  const createRandomVector = () => {
    const newVector = new Vector(dimensions, { randomVector: true })
    console.log("Created new random vector:")
    console.log(newVector)
    addVector(newVector)
    setShowModal(false)
  }

  const createCustomVector = () => {
    const newVector = new Vector(dimensions, { vector: modalInput })
    console.log("Created new custom vector:")
    console.log(newVector)
    addVector(newVector)
    setShowModal(false)
  }

  return (
    <>
      <PlusSquareTwoTone
        twoToneColor="#0DAEEB"
        style={{ fontSize: "1.2rem", marginTop: "3px" }}
        onClick={onClick}
      />
      <Modal
        title="Create a New Vector"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        onClick={e => e.stopPropagation()}
      >
        <Button onClick={createZeroVector}>Create a Zero Vector</Button>
        <hr />
        <Button onClick={createRandomVector}>Create a Random Vector</Button>
        <hr />
        <Button onClick={createCustomVector}>Input Vector Below</Button>
        <br />
        <br />
        <Input
          value={modalInput}
          onChange={e => setModalInput(e.target.value)}
        />
      </Modal>
    </>
  )
}
