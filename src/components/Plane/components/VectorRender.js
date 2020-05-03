import React, { useEffect, useState, useContext } from "react"
import styled from "styled-components/macro"

import { SettingsContext } from "services/settings"

const Image = styled.img`
  width: 500px;
  height: 500px;
`

export default function VectorRender(props) {
  const { vector } = props
  const {} = useContext(SettingsContext)

  const image = vector.getResponse()

  if (!image) {
    return (
      <Image src="https://66.media.tumblr.com/863b8ac217f5ed78218655d430f052bd/tumblr_o4usrh41LN1v9x6huo1_500.gifv" />
    )
  }

  return <Image src={image} />
}
