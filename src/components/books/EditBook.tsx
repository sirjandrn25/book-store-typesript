import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { UseBookContext } from '../store/book-context'
import InputField from '../UI/InputField'
import SelectField from '../UI/SelectField'
import Book from '../../pages/Book'

const authorOptions = ['sukra raj tamang', 'sirja tamang', 'suraj rai', 'manish bhujel', 'kumar shrestha']

const categoryOptions = ['love story', 'ghost', 'music', 'drama', 'science']

const EditBook = () => {
  const { books, editBook } = UseBookContext()
  const { bookId } = useParams() as any
  const [bookState, setBookState] = useState(books.find((book) => book.id === +bookId))

  const inputChangeHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    setBookState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name
    const value = event.target.value
    setBookState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // console.log(bookState)
    console.log(bookState)
    editBook(bookState)
  }

  return (
    <div className='card w-[900px] bg-base-100 shadow'>
      <div className='card-body'>
        <Link to={'/'} className='btn btn-link'>
          Back To Book List
        </Link>
        <div className='card-title text-2xl font-bold text-purple-600'>Add New Book</div>
        <form onSubmit={handleSubmit} action=''>
          <div className='grid grid-cols-6 gap-2 w-full'>
            <InputField
              handleChange={inputChangeHanlder}
              value={bookState.title}
              type='text'
              label='title'
              placeholder='Enter Book Title'
              className='my-2 col-span-3'
            />
            <SelectField
              label='category'
              handleChange={selectChangeHandler}
              value={bookState.category}
              className='my-2 col-span-3'
              options={categoryOptions}
            />
            <InputField
              type='number'
              handleChange={inputChangeHanlder}
              label='page'
              placeholder='enter number of pages in book'
              value={bookState.pages}
              className='my-2 col-span-2'
            />
            <InputField
              type='number'
              label='price'
              handleChange={inputChangeHanlder}
              placeholder='enter book price'
              value={bookState.price}
              className='my-2 col-span-2'
            />
            <InputField
              type='number'
              value={bookState.quantity}
              handleChange={inputChangeHanlder}
              placeholder='Enter book quantity'
              label='quantity'
              className='my-2 col-span-2'
            />
            <SelectField
              value={bookState.author}
              options={authorOptions}
              handleChange={selectChangeHandler}
              label='author'
              className='my-2 col-span-3'
            />
            <InputField
              value={bookState.issue_date}
              placeholder={'choose book issue date'}
              handleChange={inputChangeHanlder}
              type='date'
              label='issue_date'
              className='my-2 col-span-3'
            />
          </div>

          <button className='btn btn-primary mt-3 w-[120px]'>Add New</button>
        </form>
      </div>
    </div>
  )
}

export default EditBook
