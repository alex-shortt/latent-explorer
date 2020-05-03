import React from "react"
import styled from "styled-components/macro"

const Container = styled.div`
  display: flex;
`

const Image = styled.img`
  width: 500px;
  height: 500px;
  margin: 0 10px;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

export default function PathRender(props) {
  const { path } = props

  const vectors = path.getVectors()

  return (
    <Container>
      {vectors.map(vector => {
        const image = vector.getResponse()
        if (!image) {
          return (
            <Image
              key={vector.getId()}
              src="https://66.media.tumblr.com/863b8ac217f5ed78218655d430f052bd/tumblr_o4usrh41LN1v9x6huo1_500.gifv"
            />
          )
        }

        return <Image key={vector.getId()} src={image} />
      })}
    </Container>
  )
}
