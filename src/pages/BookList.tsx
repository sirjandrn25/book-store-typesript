import SearchBook from '../components/books/SearchBook'
import add_icon from '../images/add.svg'
import { Link } from 'react-router-dom'
import BookTable from '../components/books/BookTable'
import { UseCategoryContext } from '../store/category-context'
import { useEffect } from 'react'

const BookList = () => {
  return (
    <>
      <div className='py-3 flex row justify-start border-b-2'>
        <Link to='/add' className='btn btn-primary btn-circle  p-8 shadow-lg  flex items-center justify-center'>
          Add
        </Link>
      </div>

      <BookTable />
    </>
  )
}

export default BookList
