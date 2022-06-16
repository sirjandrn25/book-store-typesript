import { Book } from '../../models/book'
import { Link } from 'react-router-dom'
import edit_icon from '../../images/editing.png'
import { UseBookContext } from '../../store/book-context'

const BookTableRow: React.FC<{ book: Book; handleRemoveBook: (id: number) => void }> = (props) => {
  return (
    <tr>
      <td className='capitalize font-medium text-gray-700'>{props.book.title}</td>
      <td>{props.book.category}</td>
      <td>{props.book.pages}</td>
      <td>${props.book.price}</td>
      <td>{props.book.quantity}</td>
      <td>{props.book.author}</td>
      <td>{props.book.issue_date}</td>
      <td>
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
