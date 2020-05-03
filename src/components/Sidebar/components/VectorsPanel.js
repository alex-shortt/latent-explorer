import React, { useContext, useCallback, useState } from "react"
import styled from "styled-components/macro"
import {
  List as ListBase,
  Avatar,
  Typography,
  Button as ButtonBase
} from "antd"
import { PlusOutlined } from "@ant-design/icons"

import VectorInput from "components/VectorInput"
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

const Button = styled(ButtonBase)`
  display: block !important;
  margin: 0 auto;
`

function VectorTitle(props) {
  const { vector, onChange } = props

  return (
    <Text editable={{ onChange: str => onChange(str, vector) }}>
      {vector.getName()}
    </Text>
  )
}

export default function VectorsPanel(props) {
  const { vectors, deleteVector, invalidateState } = useContext(
    WorkspaceContext
  )

  const [inputOpen, setInputOpen] = useState(false)

  const onChange = useCallback(
    (str, vector) => {
      vector.setName(str)
      invalidateState()
    },
    [invalidateState]
  )

  return (
    <>
      <VectorInput open={inputOpen} setOpen={setInputOpen} />
      <Button onClick={() => setInputOpen(true)}>
        <PlusOutlined />
        Add Vector
      </Button>
      <List
        dataSource={vectors}
        renderItem={vector => {
          return (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={vector.getResponse()} />}
                title={<VectorTitle vector={vector} onChange={onChange} />}
                description={[
                  <Action key="delete" onClick={() => deleteVector(vector)}>
                    delete
                  </Action>
                ]}
              />
            </List.Item>
          )
        }}
      />
    </>
  )
}
