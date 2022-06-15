import { Book } from '../../models/book'
import { Link } from 'react-router-dom'
import edit_icon from '../../images/editing.png'

const BookTableRow: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <tr>
      <td className='capitalize font-medium text-gray-700'>{book.title}</td>
      <td>{book.category}</td>
      <td>{book.pages}</td>
      <td>${book.price}</td>
      <td>{book.quantity}</td>
      <td>{book.author}</td>
      <td>{book.issue_date.toLocaleDateString()}</td>
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
        <Link to='/edit/1' className='ml-3 bg-white hover:bg-white btn btn-outline py-1 btn-circle px-1 object-cover'>
          <img src={edit_icon} alt='' className='h-[30px] w-[30px]' />
        </Link>
      </td>
    </tr>
  )
}

export default BookTableRow
