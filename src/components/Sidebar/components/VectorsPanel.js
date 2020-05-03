import React, { useContext } from "react"
import styled from "styled-components/macro"
import { List as ListBase, Avatar, Button, Skeleton } from "antd"

import { WorkspaceContext } from "services/workspace"

const List = styled(ListBase).attrs({ itemLayout: "horizontal" })``

export default function VectorsPanel(props) {
  const { vectors } = useContext(WorkspaceContext)

  return (
    <List
      dataSource={vectors}
      renderItem={vector => {
        return (
          <List.Item actions={[<a key="edit">edit</a>]}>
            <List.Item.Meta
              avatar={<Avatar src={vector.getResponse()} />}
              title={<a href="https://ant.design">{vector.getName()}</a>}
              description="[0.32435, 0.23215, ..."
            />
          </List.Item>
        )
      }}
    />
  )
}
