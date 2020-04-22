import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"

import Sidebar from "./components/Sidebar"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const SidebarContainer = styled.div`
  width: 400px;
  height: 100%;
`

export default function View(props) {
  return (
    <Container>
      <Helmet title="View" />
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
    </Container>
  )
}
