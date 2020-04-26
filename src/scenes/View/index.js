import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Plane from "components/Plane"
import Sidebar from "components/Sidebar"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
`

const PlaneContainer = styled.div`
  width: 100%;
  height: 100%;
`

export default function View(props) {
  return (
    <Container>
      <Helmet title="View" />
      <PlaneContainer>
        <Plane />
      </PlaneContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
    </Container>
  )
}
