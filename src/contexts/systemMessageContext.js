import React, { createContext, useState, useCallback } from 'react'

export const SystemMessageContext = createContext()

export const SystemMessageProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const showError = useCallback((message) => {
    setErrorMessage(message)
    setSuccessMessage(null)
  }, [])

  const showSuccess = useCallback((message) => {
    setSuccessMessage(message)
    setErrorMessage(null)
  }, [])

  const clearMessages = useCallback(() => {
    setErrorMessage(null)
    setSuccessMessage(null)
  }, [])

  return (
    <SystemMessageContext.Provider
      value={{ errorMessage, successMessage, showError, showSuccess, clearMessages }}
    >
      {children}
    </SystemMessageContext.Provider>
  )
}
