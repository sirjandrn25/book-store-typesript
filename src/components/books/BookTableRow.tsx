import { Book } from '../../models/book'
import { Link } from 'react-router-dom'
import edit_icon from '../../images/editing.png'
import { UseBookContext } from '../../store/book-context'

const BookTableRow: React.FC<{ book: Book; handleRemoveBook: (id: number) => void }> = (props) => {
  return (
    <tr className='border-2 text-center'>
      <td className='capitalize font-medium text-gray-700 border-2'>{props.book.title}</td>
      <td className='border-2 capitalize'>{props.book.category}</td>
      <td className='border-2'>{props.book.pages}</td>
      <td className='border-2'>${props.book.price}</td>
      <td className='border-2'>{props.book.quantity}</td>
      <td className='border-2 capitalize'>{props.book.author}</td>
      <td className='border-2'>{props.book.issue_date}</td>
      <td className='border-2'>
        <button
          onClick={(event) => props.handleRemoveBook(props.book.id)}
          className='btn btn-circle bg-red-500 border-none text-white '>
          X
        </button>
        <Link
          to={`/edit/${props.book.id}`}
          className='ml-3 bg-white hover:bg-white btn btn-outline  btn-circle  object-cover'>
          <img src={edit_icon} alt='' className='h-[15px] w-[15px]' />
        </Link>
      </td>
    </tr>
  )
}

export default BookTableRow
