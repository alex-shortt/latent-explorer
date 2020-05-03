import React, { useContext, useCallback, useState } from "react"
import styled from "styled-components/macro"
import {
  List as ListBase,
  Avatar,
  Typography,
  Button as ButtonBase
} from "antd"
import { PlusOutlined } from "@ant-design/icons"

import { WorkspaceContext } from "services/workspace"

import PathInput from "../../PathInput"

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

function PathTitle(props) {
  const { path, onChange } = props

  return (
    <Text editable={{ onChange: str => onChange(str, path) }}>
      {path.getName()}
    </Text>
  )
}

export default function PathsPanel(props) {
  const { paths, deletePath, invalidateState } = useContext(WorkspaceContext)

  const [inputOpen, setInputOpen] = useState(false)

  const onChange = useCallback(
    (str, path) => {
      path.setName(str)
      invalidateState()
    },
    [invalidateState]
  )

  return (
    <>
      <PathInput open={inputOpen} setOpen={setInputOpen} />
      <Button onClick={() => setInputOpen(true)}>
        <PlusOutlined />
        Add Path
      </Button>
      <br />
      <List
        dataSource={paths}
        renderItem={path => {
          return (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={path.getVectors()[0].getResponse()} />}
                title={<PathTitle path={path} onChange={onChange} />}
                description={[
                  <Action key="delete" onClick={() => deletePath(path)}>
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
