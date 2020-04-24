import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Plane from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Plane />).toJSON()

  expect(tree).toMatchSnapshot()
})
