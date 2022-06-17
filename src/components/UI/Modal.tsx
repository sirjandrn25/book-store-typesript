import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import { UseUIContext } from '../../store/ui-context'

type modalPropsType = {
  children: React.ReactNode
  //   open: boolean
  onClose: () => void
}

const Modal = (props: modalPropsType) => {
  //   if (!props.open) return null
  const { modalClose } = UseUIContext()
  return ReactDOM.createPortal(
    <>
      <div className='bg-black/50 fixed w-full h-full top-0 bottom-0 right-0 left-0 z-50' />

      <Card className='flex flex-col z-50 p-5  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white  '>
        <div className='flex flex-row justify-end mb-3 px-3  text-lg font-bold'>
          <span className='font-bold cursor-pointer ' onClick={modalClose}>
            X
          </span>
        </div>
        {props.children}
      </Card>
    </>,
    document.getElementById('portal')!
  )
}

export default Modal
