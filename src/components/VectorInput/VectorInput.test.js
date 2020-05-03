import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import VectorInput from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<VectorInput />).toJSON()

  expect(tree).toMatchSnapshot()
})
