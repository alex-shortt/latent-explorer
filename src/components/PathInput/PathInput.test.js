import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import PathInput from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<PathInput />).toJSON()

  expect(tree).toMatchSnapshot()
})
