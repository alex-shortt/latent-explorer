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

  const saveVector = vector => {
    exportToJson({ z: JSON.parse(vector.getVectorString()) }, vector.getName())
  }

  return (
    <>
      <VectorInput open={inputOpen} setOpen={setInputOpen} />
      <Button onClick={() => setInputOpen(true)}>
        <PlusOutlined />
        Add Vector
      </Button>
      <br />
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
                  </Action>,
                  <Action key="save" onClick={() => saveVector(vector)}>
                    save
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

const exportToJson = (objectData, fileName) => {
  const filename = `${fileName}.json`
  const contentType = "application/json;charset=utf-8;"
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    const blob = new Blob(
      [decodeURIComponent(encodeURI(JSON.stringify(objectData)))],
      { type: contentType }
    )
    navigator.msSaveOrOpenBlob(blob, filename)
  } else {
    const a = document.createElement("a")
    a.download = filename
    a.href = `data:${contentType},${encodeURIComponent(
      JSON.stringify(objectData)
    )}`
    a.target = "_blank"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
}
