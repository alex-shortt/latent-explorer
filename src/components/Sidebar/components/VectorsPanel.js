import React, { useContext, useCallback } from "react"
import styled from "styled-components/macro"
import { List as ListBase, Avatar, Typography } from "antd"

import { WorkspaceContext } from "services/workspace"

const { Text } = Typography

const List = styled(ListBase).attrs({ itemLayout: "horizontal" })``

const Action = styled.a`
  margin: 0 10px;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

export default function VectorsPanel(props) {
  const { vectors, deleteVector, invalidateState } = useContext(
    WorkspaceContext
  )

  const onChange = useCallback(
    (str, vector) => {
      vector.setName(str)
      invalidateState()
    },
    [invalidateState]
  )

  return (
    <List
      dataSource={vectors}
      renderItem={vector => {
        return (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={vector.getResponse()} />}
              title={() => (
                <Text editable={{ onChange: str => onChange(str, vector) }}>
                  {vector.getName()}
                </Text>
              )}
              description={[
                <Action key="edit">edit</Action>,
                <Action key="view">view</Action>,
                <Action key="save">save</Action>,
                <Action key="delete" onClick={() => deleteVector(vector)}>
                  delete
                </Action>
              ]}
            />
          </List.Item>
        )
      }}
    />
  )
}
