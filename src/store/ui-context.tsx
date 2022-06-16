import { createContext, useContext, useState } from 'react'

type uiTypes = {
  message: string
  status: string
  openHandler: (message: string, updateStatus: string) => void
  closeHandler: () => void
}

const UIContext = createContext<uiTypes>({
  message: '',
  status: '',
  openHandler: () => {},
  closeHandler: () => {},
})

export const UIContextProvider: React.FC = (props) => {
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')

  const openHandler = (message: string, updateStatus: string) => {
    setMessage(message)
    setStatus(updateStatus)
  }
  const closeHandler = () => {
    setMessage('')
    setStatus('')
  }

  const contextObj: uiTypes = {
    message,
    status,
    openHandler,
    closeHandler,
  }

  return <UIContext.Provider value={contextObj}>{props.children}</UIContext.Provider>
}

export const UseUIContext = () => useContext(UIContext)
