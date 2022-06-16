import edit_icon from '../../images/editing.png'
import { Link } from 'react-router-dom'
import BookTableRow from './BookTableRow'
import useHttp from '../../hooks/useHttp'
import { useEffect } from 'react'
import { UseBookContext } from '../../store/book-context'
import TableHeadCell from './TableHeadCell'

let config = {
  url: 'http://localhost:4000/books',
  method: 'get',
}
const BookTable = () => {
  const { sendHttpRequest } = useHttp()
  const { getAllBooks, books, removeBook } = UseBookContext()
  useEffect(() => {
    const response = sendHttpRequest(config)
    response.then((data) => {
      if (data) {
        getAllBooks(data)
      }
    })
  }, [])

  const handleRemoveBook = (book_id: number) => {
    const removeConfig = {
      url: `http://localhost:4000/books/${book_id}`,
      method: 'delete',
    }
    const response = sendHttpRequest(removeConfig)
    response.then((resp) => {
      if (resp) {
        removeBook(book_id)
      }
    })
  }

  let renderContent: any = <p>No Books Found</p>
  if (books.length) {
    renderContent = books.map((book) => <BookTableRow book={book} handleRemoveBook={handleRemoveBook} key={book.id} />)
  }

  return (
    <table className=' w-full'>
      <thead className='bg-gray-100'>
        {/* <TableHead /> */}
        <tr>
          <th className='text-md p-2 border-2 border-purple-200 text-gray-70 '>
            <TableHeadCell label='title' />
          </th>

          <th className='text-md p-2 border-2 border-purple-200 text-gray-70 '>
            <TableHeadCell label="" />
          </th>
          <th className='text-md p-2 border-2 border-purple-200 text-gray-70 '>
          <div className='w-full flex flex-row justify-between items-center'>
              <span>Pages</span>
              <span>>></span>
            </div>
          </th>
          <th className='text-md p-2 border-2 border-purple-200 text-gray-70 '>Price</th>
          <th className='text-md p-2 border-2 border-purple-200 text-gray-70 '>Quantity</th>
          <th className='text-md p-2 border-2 border-purple-200 text-gray-70 '>Author</th>
          <th className='text-md p-2 border-2 border-purple-200 text-gray-70 '>Issue Date</th>
          <th className='text-md p-2 border-2 border-purple-200 text-gray-70 '>Action</th>
        </tr>
      </thead>
      <tbody>{renderContent}</tbody>
    </table>
  )
}

export default BookTable
