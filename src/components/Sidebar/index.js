import React from "react"
import styled from "styled-components/macro"
import { Collapse } from "antd"

import VectorPanel from "./components/VectorPanel"
import SettingsPanel from "./components/SettingsPanel"
import { shadowRotate } from "./assets/animations"

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  overflow-y: auto;
`

const Header = styled.h1`
  text-align: center;
  color: white;
  animation: ${shadowRotate} infinite forwards 8s linear;
`

export default function Sidebar(props) {
  return (
    <Container>
      <Header>Latent Explorer</Header>
      <br />
      <Collapse>
        <Collapse.Panel header="Settings" key="1">
          <SettingsPanel />
        </Collapse.Panel>
        <Collapse.Panel header="Vector" key="2">
          <VectorPanel />
        </Collapse.Panel>
      </Collapse>
    </Container>
  )
}
