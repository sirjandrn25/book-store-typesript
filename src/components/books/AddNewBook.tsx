import { ChangeEventHandler, useState } from 'react'
import InputField from '../UI/InputField'
import React from 'react'
import { Input } from '../UI/Input'
import { Link } from 'react-router-dom'
import SelectField from '../UI/SelectField'
import { UseBookContext } from '../store/book-context'
import { Book } from '../../models/book'

const initBookValue = {
  title: '',
  category: '',
  page: 0,
  price: 0,
  quantity: 0,
  author: '',
  issue_date: '',
}

const authorOptions = ['sukra raj tamang', 'sirja tamang', 'suraj rai', 'manish bhujel', 'kumar shrestha']

const categoryOptions = ['love story', 'ghost', 'music', 'drama', 'science']

const AddNewBook = () => {
  const [bookState, setBookState] = useState(initBookValue)
  const { addBook } = UseBookContext()

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
    const new_book = new Book(
      bookState.title,
      bookState.page,
      bookState.price,
      bookState.author,
      bookState.category,
      bookState.quantity,
      new Date(bookState.issue_date)
    )
    addBook(new_book)
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
              value={bookState.page}
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

export default AddNewBook
