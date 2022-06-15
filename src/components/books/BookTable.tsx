import edit_icon from '../../images/editing.png'
import { Link } from 'react-router-dom'
import BookTableRow from './BookTableRow'
import { Book } from '../../models/book'

const book1 = new Book('music is life', 122, 24.56, 'sukra tamang', 'music', 12, new Date('1992-05-05'))
const book2 = new Book('tourism places', 60, 88.56, 'suraj rai', 'tourism', 20, new Date('2021-05-22'))
const book3 = new Book(
  'typescript for begginers',
  255,
  886.45,
  'sirjan tamang',
  'programming',
  24,
  new Date('2020-10-12')
)
const books: Book[] = [book1, book2, book3]

const BookTable = () => {
  return (
    <table className='table w-full'>
      <thead>
        {/* <TableHead /> */}
        <tr>
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
        {books.map((book) => (
          <BookTableRow book={book} key={book.id} />
        ))}
        {/* <BookTableRow book={book1} /> */}
      </tbody>
    </table>
  )
}

export default BookTable
