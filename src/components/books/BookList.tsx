import React from 'react'
import edit_icon from '../../images/editing.png'
import { Link } from 'react-router-dom'

const BookList = () => {
  return (
    <table className='table w-full'>
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Category</th>
          <th>Pages</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Author</th>
          <th>Issue Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Habuli</td>
          <td>Jokes</td>
          <td>120</td>
          <td>$250</td>
          <td>8</td>
          <td>suraj rai</td>
          <td>2022-02-04</td>
          <td>
            <button className='btn btn-circle bg-red-500 border-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            <Link
              to='/edit/1'
              className='ml-3 bg-white hover:bg-white btn btn-outline py-1 btn-circle px-1 object-cover'>
              <img src={edit_icon} alt='' className='h-[30px] w-[30px]' />
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default BookList
