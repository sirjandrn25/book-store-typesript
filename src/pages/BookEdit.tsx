// import EditBook from '../components/books/EditBook'
import BookForm from '../components/books/BookForm'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Book } from '../models/book'
import useHttp from '../hooks/useHttp'
const initBookValue = {
  title: '',
  category: '',
  pages: 0,
  price: 0,
  quantity: 0,
  author: '',
  issue_date: '',
}

let send_config = {
  url: '',
  method: 'put',
}
const BookEdit = () => {
  const { bookId } = useParams()
  const [initialBookState, setInitialBookState] = useState<Book>(initBookValue)
  const { sendHttpRequest } = useHttp()

  useEffect(() => {
    const config = {
      url: `http://localhost:4000/books/${bookId}`,
      method: 'get',
    }
    const response = sendHttpRequest(config)
    response.then((data) => {
      if (data) {
        setInitialBookState(data)
      }
    })
    send_config['url'] = `http://localhost:4000/books/${bookId}`
  }, [sendHttpRequest])
  // console.log(initialBookState)

  return <BookForm initialBook={initialBookState} config={send_config} header={'Update Book Value'} />
}

export default BookEdit
