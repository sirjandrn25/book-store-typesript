import { Book } from '../../models/book'
import { Link } from 'react-router-dom'
import edit_icon from '../../images/editing.png'

const BookTableRow: React.FC<{ book: Book; handleRemoveBook: (id: number) => void }> = (props) => {
  return (
    <tr>
      <td className='capitalize font-medium text-gray-700'>{props.book.title}</td>
      <td>{props.book.category}</td>
      <td>{props.book.pages}</td>
      <td>${props.book.price}</td>
      <td>{props.book.quantity}</td>
      <td>{props.book.author}</td>
      <td>{props.book.issue_date.toLocaleDateString()}</td>
      <td>
        <button
          onClick={(event) => props.handleRemoveBook(props.book.id)}
          className='btn btn-circle bg-red-500 border-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
        <Link to={`/edit/${props.book.id}`} className='ml-3 bg-white hover:bg-white btn btn-outline py-1 btn-circle px-1 object-cover'>
          <img src={edit_icon} alt='' className='h-[30px] w-[30px]' />
        </Link>
      </td>
    </tr>
  )
}

export default BookTableRow
