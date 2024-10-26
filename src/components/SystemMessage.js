import React, { useContext, useEffect, useState } from 'react'
import { SystemMessageContext } from '../contexts/systemMessageContext'
import CancelIcon from '@mui/icons-material/Cancel'

const SystemMessage = () => {
  const { errorMessage, successMessage, clearMessages } = useContext(SystemMessageContext)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  useEffect(() => {
    if (errorMessage || successMessage) {
      setShowMessage(true)
      setMessage(errorMessage || successMessage)
      setMessageType(errorMessage ? 'error' : 'success')
    } else {
      setShowMessage(false)
      setTimeout(() => {
        setMessage('')
        setMessageType('')
      }, 500)
    }
  }, [errorMessage, successMessage])

  const removeMessage = () => {
    setShowMessage(false)
    setTimeout(clearMessages, 500)
  }

  return (
    <div className={`${showMessage ? 'system-message-enter' : message? 'system-message-leave' : 'hidden'} ${messageType === 'error' ? 'bg-red-600' : 'bg-green-600'} w-auto max-w-[360px] self-center absolute top-4 flex gap-4 justify-center items-center text-white font-bold rounded-xl py-2 px-4 md:py-4 md:px-6 z-[1000]`}>
      <p>{message}</p>
      <CancelIcon onClick={removeMessage} className='cursor-pointer' />
    </div>
  )
}

export default SystemMessage
