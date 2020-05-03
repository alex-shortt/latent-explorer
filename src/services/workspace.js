import React, { useState, useContext, useCallback } from "react"
import useDeepCompareEffect from "use-deep-compare-effect"

import { SettingsContext } from "./settings"

export const WorkspaceContext = React.createContext()

export function WorkspaceProvider(props) {
  const { children } = props
  const { MAX_DIMENSIONS, connectionUrl } = useContext(SettingsContext)

  const [vectors, setVectors] = useState([])
  const [paths, setPaths] = useState([])

  const addVector = useCallback(
    async vector => {
      await vector.loadResponse(connectionUrl)
      const newVectors = [...vectors, vector]
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
    paths,
    addPath
  }

  return (
    <WorkspaceContext.Provider value={providerValue}>
      {children}
    </WorkspaceContext.Provider>
  )
}
