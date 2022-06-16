import { useEffect, useState } from 'react'
import { UseUIContext } from '../../store/ui-context'

const Notification = () => {
  const { status, closeHandler, message } = UseUIContext()
  useEffect(() => {
    let interval = setTimeout(() => {
      closeHandler()
    }, 3000)
    return () => clearInterval(interval)
  }, [status])

  let notification_class =
    'shadow-lg flex flex-row justify-between items-center fixed top-5 right-5 rounded-lg w-[350px] p-3  '

  if (!status) return null

  if (status === 'pending') {
    notification_class += 'bg-teal-600'
  } else if (status === 'success') {
    notification_class += 'bg-green-600'
  } else {
    notification_class += 'bg-red-600'
  }

  return (
    <div className={notification_class}>
      <span className='text-white'>{message}</span>
      <span onClick={closeHandler} className=' font-bold text-white border-2 rounded-full px-3 cursor-pointer py-1'>
        X
      </span>
    </div>
  )
}

export default Notification
