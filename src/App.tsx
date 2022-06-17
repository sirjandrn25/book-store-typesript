import { Outlet } from 'react-router-dom'
import { BookContextProvider } from './store/book-context'
import Notification from './components/UI/Notification'
import ContextRootProvider from './store'
// import Modal from './components/UI/ModalDialogue'
import CateogryAddForm from './components/category/CateogryAddForm'

export default function App() {
  return (
    <div className='h-screen w-screen relative'>
      {/* <h1 className='font-bold underline text-3xl'>Book Store App</h1> */}
      <ContextRootProvider>
        <div className='w-[1100px] absolute top-[120px] left-[200px]'>
          <Outlet />
        </div>
        <Notification />
        {/* <Modal /> */}
        <CateogryAddForm />
      </ContextRootProvider>
    </div>
  )
}
