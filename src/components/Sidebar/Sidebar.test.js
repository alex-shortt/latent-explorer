import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Sidebar from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Sidebar />).toJSON()

  expect(tree).toMatchSnapshot()
})
