import React, { useState, useContext, useCallback } from "react"

import { SettingsContext } from "./settings"

export const WorkspaceContext = React.createContext()

export function WorkspaceProvider(props) {
  const { children } = props
  const { MAX_DIMENSIONS } = useContext(SettingsContext)

  const [vectors, setVectors] = useState([])
  const [paths, setPaths] = useState([])

  const addVector = useCallback(vector => {
    const newVectors = [...vectors, vector]
    setVectors(newVectors)
  })

  const addPath = useCallback(path => {
    const newPaths = [...paths, path]
    setPaths(newPaths)
  })

  const providerValue = {
    vectors,
    addVector,
    paths,
    addPath
  }

  return (
    <WorkspaceContext.Provider value={providerValue}>
      {children}
    </WorkspaceContext.Provider>
  )
}
