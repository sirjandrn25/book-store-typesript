// import AddNewBook from '../components/books/AddNewBook'
import { Book } from '../models/book'
import BookForm from '../components/books/BookForm'

let config = {
  url: 'http://localhost:4000/books',
  method: 'post',
}
const BookAdd = () => {
  return <BookForm config={config} header='add new book' />
}

export default BookAdd
