import { createGlobalStyle } from "styled-components/macro"
import "typeface-roboto"
import "normalize.css"
import "antd/dist/antd.css"

import "./fontawesome"

export default createGlobalStyle`
  body, html, #root {
    height: 100%;
    overflow-y: hidden;
  }

  body {
    font-family: Avenir, Lato, Roboto, sans-serif;
    overflow-x: hidden;
  }
`
