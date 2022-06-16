// import AddNewBook from '../components/books/AddNewBook'
import { Book } from '../models/book'
import BookForm from '../components/books/BookForm'

const initBookValue = {
  title: '',
  category: '',
  pages: 0,
  price: 0,
  quantity: 0,
  author: '',
  issue_date: '',
}

let config = {
  url: 'http://localhost:4000/books',
  method: 'post',
}
const BookAdd = () => {
  return <BookForm initialBook={initBookValue} config={config} header='add new book' />
}

export default BookAdd
