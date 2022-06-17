import { createContext, useContext, useState } from 'react'

type uiTypes = {
  message: string
  status: string
  openHandler: (message: string, updateStatus: string) => void
  closeHandler: () => void
  modalOpen: string
  modalClose: () => void
  modalOpenHandler: (val: string) => void
}

const UIContext = createContext<uiTypes>({
  message: '',
  status: '',
  openHandler: () => {},
  closeHandler: () => {},
  modalOpen: '',
  modalClose: () => {},
  modalOpenHandler: () => {},
})

type uiPropsTypes = {
  children: React.ReactNode
}

export const UIContextProvider = (props: uiPropsTypes) => {
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')
  const [modalOpen, setModalOpen] = useState('')

  const openHandler = (message: string, updateStatus: string) => {
    setMessage(message)
    setStatus(updateStatus)
  }
  const closeHandler = () => {
    setMessage('')
    setStatus('')
  }

  const modalOpenHandler = (modal: string) => {
    setModalOpen(modal)
  }
  const modalClose = () => {
    setModalOpen('')
  }

  const contextObj: uiTypes = {
    message,
    status,
    openHandler,
    closeHandler,
    modalClose,
    modalOpenHandler,
    modalOpen,
  }

  return <UIContext.Provider value={contextObj}>{props.children}</UIContext.Provider>
}

export const UseUIContext = () => useContext(UIContext)
