import BookList from '../components/books/BookList'
import SearchBook from '../components/books/SearchBook'
import add_icon from '../images/add.svg'
import { Link } from 'react-router-dom'

const Book = () => {
  return (
    <div className='w-[1000px] flex flex-col'>
      <div className='py-3 flex row justify-start border-b-2'>
        <Link to='/add' className='btn btn-primary btn-circle  p-8 shadow-lg  flex items-center justify-center'>
          Add
        </Link>
      </div>
      <SearchBook />
      <BookList />
    </div>
  )
}

export default Book
