import React, { useState, useContext, useCallback } from "react"

import { SettingsContext } from "./settings"

export const WorkspaceContext = React.createContext()

export function WorkspaceProvider(props) {
  const { children } = props
  const { MAX_DIMENSIONS, connectionUrl } = useContext(SettingsContext)

  const [vectors, setVectors] = useState([])
  const [paths, setPaths] = useState([])

  const addVector = useCallback(
    async vector => {
      vector.setName(`Untitled Vector ${vectors.length + 1}`)
      await vector.loadResponse(connectionUrl)
      const newVectors = [...vectors, vector]
      setVectors(newVectors)
    },
    [connectionUrl, vectors]
  )

  const deleteVector = useCallback(
    async vector => {
      const newVectors = [...vectors, vector].filter(
        vec => vec.getId() !== vector.getId()
      )

      setVectors(newVectors)
    },
    [vectors]
  )

  const addPath = useCallback(
    path => {
      const newPaths = [...paths, path]
      setPaths(newPaths)
    },
    [paths]
  )

  const invalidateState = useCallback(() => {
    const newVectors = [...vectors]
    setVectors(newVectors)
  }, [vectors])

  const providerValue = {
    invalidateState,
    vectors,
    addVector,
    deleteVector,
    paths,
    addPath
  }

  return (
    <WorkspaceContext.Provider value={providerValue}>
      {children}
    </WorkspaceContext.Provider>
  )
}
