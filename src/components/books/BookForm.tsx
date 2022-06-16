import { useEffect, useState } from 'react'
import InputField from '../UI/InputField'
import React from 'react'

import { Link } from 'react-router-dom'
import SelectField from '../UI/SelectField'

import { Book } from '../../models/book'
import useHttp from '../../hooks/useHttp'
import { Navigate, useNavigate } from 'react-router-dom'

const authorOptions = ['sukra raj tamang', 'sirja tamang', 'suraj rai', 'manish bhujel', 'kumar shrestha']
const categoryOptions = ['love story', 'ghost', 'music', 'drama', 'science']

type saveBookFunc = (book: Book) => void

type configType = {
  url: string
  method?: string
  data?: object
}

const BookForm: React.FC<{ initialBook: Book; header: string; config: configType }> = (props) => {
  const [bookState, setBookState] = useState(props.initialBook)
  const { status, error, sendHttpRequest } = useHttp()
  const navigate = useNavigate()
  useEffect(() => {
    setBookState(props.initialBook)
  }, [props.initialBook])

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

    const book_data = {
      title: bookState.title,
      pages: +bookState.pages,
      price: +bookState.price,
      author: bookState.author,
      category: bookState.category,
      quantity: +bookState.quantity,
      issue_date: bookState.issue_date,
    }
    props.config['data'] = book_data
    const response = sendHttpRequest(props.config)
    response.then((resp) => {
      if (resp) {
        setTimeout(() => {
          navigate('/', { replace: true })
        }, 1000)
      }
    })
    // props.saveFunc(book_data)
  }

  return (
    <div className='card w-full bg-base-100 shadow'>
      <div className='card-body'>
        <Link to={'/'} className='btn btn-link'>
          Back To Book List
        </Link>
        <div className='card-title text-2xl font-bold text-purple-600 capitalize'>{props.header}</div>
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
              label='pages'
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

          <button className='btn btn-primary mt-3 w-[120px]'>save</button>
        </form>
      </div>
    </div>
  )
}

export default BookForm
