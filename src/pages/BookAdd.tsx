// import AddNewBook from '../components/books/AddNewBook'
import { Book } from '../models/book'
import BookForm from '../components/books/BookForm'
import useHttp from '../hooks/useHttp'
// import {Book} from '../models/book'

let config = {
  url: 'http://localhost:4000/books',
  method: 'post',
}
const BookAdd = () => {
  return <BookForm config={config} header='add new book' />
}

export default BookAdd
