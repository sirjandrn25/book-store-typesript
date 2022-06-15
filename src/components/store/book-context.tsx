import { createContext, useContext, useState } from 'react'
import { Book } from '../../models/book'

type bookContextObj = {
  books: Book[]
  addBook: (book: Book) => void
  removeBook: (id: number) => void
  editBook: (book: Book) => void
}

const BookContext = createContext<bookContextObj>({
  books: [],
  addBook: () => {},
  removeBook: () => {},
  editBook: () => {},
})

export const BookContextProvider: React.FC = (props) => {
  const [books, setBooks] = useState<Book[]>([])

  const addBook = (new_book: Book) => {
    setBooks((prevState) => {
      return [new_book, ...prevState]
    })
  }
  const removeBook = (book_id: number) => {
    setBooks((prevState) => prevState.filter((book) => book.id !== book_id))
  }
  const editBook = (updateBook: Book) => {
    setBooks((prevState) => prevState.map((book) => (book.id === updateBook.id ? updateBook : book)))
  }

  const contextObj: bookContextObj = {
    books: books,
    addBook: addBook,
    removeBook: removeBook,
    editBook: editBook,
  }

  return <BookContext.Provider value={contextObj}>{props.children}</BookContext.Provider>
}

export const UseBookContext = () => useContext(BookContext)
