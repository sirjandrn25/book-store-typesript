import { createContext, useContext, useState } from 'react'
import { Book } from '../models/book'

type bookContextObj = {
  books: Book[]

  removeBook: (id: number) => void

  getAllBooks: (book: Book[]) => void
}

const BookContext = createContext<bookContextObj>({
  books: [],

  removeBook: () => {},
  getAllBooks: () => {},
})

// type propsType={
//   children:React.No
// }

export const BookContextProvider: React.FC = (props) => {
  const [books, setBooks] = useState<Book[]>([])

  const getAllBooks = (new_books: Book[]) => {
    setBooks(new_books)
  }
  // const addBook = (new_book: Book) => {
  //   setBooks((prevState) => {
  //     return [new_book, ...prevState]
  //   })
  // }
  const removeBook = (book_id: number) => {
    setBooks((prevState) => prevState.filter((book) => book.id !== book_id))
  }
  // const editBook = (updateBook: Book) => {
  //   setBooks((prevState) => prevState.map((book) => (book.id === updateBook.id ? updateBook : book)))
  // }

  const contextObj: bookContextObj = {
    books: books,
    // addBook: addBook,
    removeBook: removeBook,
    getAllBooks,
    // editBook: editBook,
  }

  return <BookContext.Provider value={contextObj}>{props.children}</BookContext.Provider>
}

export const UseBookContext = () => useContext(BookContext)
