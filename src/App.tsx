import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      {/* <h1 className='font-bold underline text-3xl'>Book Store App</h1> */}
      <Outlet />
    </div>
  )
}