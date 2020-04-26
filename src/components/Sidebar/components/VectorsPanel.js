import React, { useContext } from "react"
import styled from "styled-components/macro"

import { WorkspaceContext } from "services/workspace"

const Container = styled.div`
  border-bottom: 1px solid black;
`

export default function VectorsPanel(props) {
  const { vectors } = useContext(WorkspaceContext)

  return (
    <>
      {vectors.map(vector => (
        <Container key={vector.getId()}>{vector.getName()}</Container>
      ))}
    </>
  )
}
