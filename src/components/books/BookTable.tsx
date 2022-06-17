import edit_icon from '../../images/editing.png'
import { Link } from 'react-router-dom'
import BookTableRow from './BookTableRow'
import useHttp from '../../hooks/useHttp'
import { ChangeEvent, useEffect, useState } from 'react'
import { UseBookContext } from '../../store/book-context'
import TableHeadCell from './TableHeadCell'
import { Book } from '../../models/book'
import SearchBook from './SearchBook'

let config = {
  url: 'http://localhost:4000/books',
  method: 'get',
}

const sortBookList = (books: Book[], label: string, sort_order: string) => {
  // console.log(books)
  if (typeof books[0][label] === 'number') {
    if (sort_order === 'asc') {
      return books.sort((a, b) => a[label] - b[label])
    } else {
      return books.sort((a, b) => b[label] - a[label])
    }
  } else {
    if (sort_order === 'asc') {
      return books.sort((a, b) => a[label].localeCompare(b[label]))
    } else {
      return books.sort((a, b) => b[label].localeCompare(a[label]))
    }
  }
}

const BookTable = () => {
  const { sendHttpRequest } = useHttp()
  const { getAllBooks, books, removeBook } = UseBookContext()
  const [sortLabel, setSortLabel] = useState('')
  const [sortOrder, setSortOrder] = useState('')
  const [search, setSearch] = useState('')
  const [filterBy, setFilterBy] = useState('')
  const [filterVal, setFilterVal] = useState('')

  useEffect(() => {
    const response = sendHttpRequest(config)
    response.then((data) => {
      if (data) {
        getAllBooks(data)
      }
    })
  }, [])

  const handleRemoveBook = (book_id: number) => {
    const removeConfig = {
      url: `http://localhost:4000/books/${book_id}`,
      method: 'delete',
    }
    const response = sendHttpRequest(removeConfig)
    response.then((resp) => {
      if (resp) {
        removeBook(book_id)
      }
    })
  }
  let sortedBooks = books

  if (sortLabel) {
    sortedBooks = sortBookList(books.slice(), sortLabel, sortOrder)
  }

  if (search.length >= 3) {
    sortedBooks = sortedBooks.filter((book) => book.title.startsWith(search))
  }
  if (filterBy && filterVal) {
    sortedBooks = sortedBooks.filter((book) => book[filterBy] === filterVal)
  }

  // console.log(sortedBooks)
  const sortHandler = (sort_label: string) => {
    if (sort_label === sortLabel) {
      if (sortOrder === 'desc') {
        setSortLabel('')
        setSortOrder('')
      } else {
        setSortOrder('desc')
      }
    } else {
      setSortLabel(sort_label)
      setSortOrder('asc')
    }
  }

  let renderContent: any = <p>No Books Found</p>
  if (sortedBooks.length) {
    renderContent = sortedBooks.map((book) => (
      <BookTableRow book={book} handleRemoveBook={handleRemoveBook} key={book.id} />
    ))
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const filterByHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value)
    setFilterVal('')
  }
  const filterValHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterVal(event.target.value)
  }

  return (
    <>
      <SearchBook
        filterBy={filterBy}
        filterByHandler={filterByHandler}
        filterVal={filterVal}
        filterValHanlder={filterValHandler}
        search={search}
        searchHandler={handleSearch}
      />
      <table className=' w-full '>
        <thead className='bg-gray-100 shadow-sm'>
          {/* <TableHead /> */}
          <tr>
            <TableHeadCell sortType={{ label: sortLabel, order: sortOrder }} sortFunc={sortHandler} label='title' />
            <TableHeadCell sortType={{ label: sortLabel, order: sortOrder }} sortFunc={sortHandler} label='category' />
            <TableHeadCell sortType={{ label: sortLabel, order: sortOrder }} sortFunc={sortHandler} label='pages' />
            <TableHeadCell sortType={{ label: sortLabel, order: sortOrder }} sortFunc={sortHandler} label='price' />
            <TableHeadCell sortType={{ label: sortLabel, order: sortOrder }} sortFunc={sortHandler} label='quantity' />
            <TableHeadCell sortType={{ label: sortLabel, order: sortOrder }} sortFunc={sortHandler} label='author' />
            <TableHeadCell
              sortType={{ label: sortLabel, order: sortOrder }}
              sortFunc={sortHandler}
              label='issue_date'
            />
            <th className='text-md p-2 border-2 border-purple-200 text-gray-70'>Actions</th>
          </tr>
        </thead>
        <tbody>{renderContent}</tbody>
      </table>
      <div className='flex flex-row my-3 items-center'>
        <select className='select select-bordered select-sm w-[80px]'>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
        </select>
        <span className='ml-3 text-purple-600'>show 6 out of 10</span>
      </div>
    </>
  )
}

export default BookTable
