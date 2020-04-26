import React, { useState } from "react"

export const SettingsContext = React.createContext()

const MAX_DIMENSIONS = 512

export function SettingsProvider(props) {
  const { children } = props

  const [connectionUrl, setConnectionUrl] = useState("https://localhost:8000")
  const [dimensions, setDimensions] = useState(512)
  const [truncation, setTruncation] = useState(0.8)
  const [defaultValue, setDefaultValue] = useState(0)

  const providerValue = {
    MAX_DIMENSIONS,
    connectionUrl,
    setConnectionUrl,
    dimensions,
    setDimensions,
    truncation,
    setTruncation,
    defaultValue,
    setDefaultValue
  }

  return (
    <SettingsContext.Provider value={providerValue}>
      {children}
    </SettingsContext.Provider>
  )
}
